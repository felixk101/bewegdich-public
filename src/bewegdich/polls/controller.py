# -*- coding: utf-8 -*-
import Queue as Q
import datetime
import time as t
from polls.apis import get_walking_Route, get_matching_stations, get_efa_routes, closestCity, replace_coordlist
from models import Coord
from models import efaStop
from route import Route, Stop
from timer import Timer
from variables import SPEED, FH_LONGWAY1, FH_LONGWAY2
from worker import SeachWorker, RoutesWorker

TIMER = Timer()


class Controller(object):
    """
        get user position
        get destination position
        calculate fastest route from start to destination
        filter start station, final stop (direction) and departure times of route
        get next (e.g. 5) stops in driving direction
        get departure times for these stops
        calculate walking time between user position and these stops
        compare walking time and departure times
        go over these stops:
            if current time + walking time < departure time
               set this stop as starting point

       # Returns the best Route
    """

    def __init__(self, session):
        # Saves the session object of one user
        self.session = session

        # Stores all calculated walking routes into this dic, so it doesn't need to be calculated again
        self.walking_routes = {}

    def get_optimized_routes(self, start, dest, time=-1):
        """
        The main function of the Controller.
        At first it will ask the EFA-API for their routes. These routes are optimized to
        contain a minimum of walking time.
        Each station in every route will now be analysed. Depending on the time the user would have
        to walk to this specific station, the best stations will be saved. Each route has its own best station.
        At worst this is the startstation the EFA-API already returned on the first place.
        Finally these best stations will each be given to the EFA-API again to get a list of routes which
        contains a better amount of walking. These routes will be filtered(e.g. same Line) and returned

        :rtype: Route
        :param start: (Coordinates) the startposition where the user currently is
        :param dest: the stopid where the user want to go
        :param time: the time when the user wants to start
        :return: the optimized routes as a list
        """
        TIMER.start("Whole search")
        # If no time was set, take the current one
        if time == -1:
            time = datetime.datetime.now()
            self.session[SPEED] = 0.2
           # time = datetime.datetime(2016, 06, 20, 10, 2)

        try:  # Check if the dest is really a stopID
            int(dest)
        except ValueError:
            print("Error: Destination was not a stopID")
            return 8

        startstations = self.find_startstations(start, dest, time)
        if type(startstations) == int:
            return startstations
        self.walking_routes = {}
        for station in startstations:
            self.walking_routes[station.stopid] = station.walk_route

        routes = []
        id = 0

        TIMER.start("Find best routes")

        # Do the routesearch again with the new station

        tmplist = []
        for station in startstations:
            # The User has to walk to the first station
            starttime = time + station.walkingtime
            tmplist.append([station, dest, starttime])

        queue = Q.Queue()
        resultlist = []

        # Create worker threads
        for x in range(8):
            worker = RoutesWorker(queue, resultlist, self)
            # Setting daemon to True will let the main thread exit even though the workers are blocking
            worker.daemon = True
            worker.start()

        for tmpparameter in tmplist:
            queue.put(tmpparameter)

        queue.join()
        TIMER.printTimer("Find best routes")
        for arr in resultlist:
            station = arr[0]
            routes_list = arr[1]
            if type(routes_list) == int:
                return routes_list

            for route in routes_list:
                duplicate_route = 0
                if route.isWalkOnly():
                    continue
                # Search for Routes which are the same line but just a different departuretime
                for tmp_route in routes:
                    if tmp_route.origin_stop.name == route.origin_stop.name and tmp_route.line == route.line:
                        duplicate_route = 1
                        break
                if duplicate_route == 1:
                    continue
                if station.walkingtime != -1:
                    route.departure_time = route.departure_time - station.walkingtime

                route.serializeTimes()

                self.insert_start_point(start, station.walkingtime, route)
                route.duration = route.duration + station.walkingtime
                route.id = id
                id += 1
                routes.append(route)

        routes = sorted(routes, key=lambda route: route.departure_time)
        TIMER.printTimer("Whole search")
        return routes

    def find_best_station(self, parameters):
        """
            Optimized for parallel running
            This functions searches in the given route for the furthest station to walk to and still catch the same bus

        :param parameters: a list with the parameters route userpos time
        :return: the best station
        """
        route = parameters[0]
        userpos = parameters[1]
        time = parameters[2]

        # Get the next 5 stations of this line
        station_list = route.get_next_stops()
        if route.isWalkOnly():
            return -1

        best_station = -1

        # Step through stations to find a better one
        for station in station_list[:5]:
            # Calculate the time to walk to the given station

            walk_route = get_walking_Route(userpos, station.get_coords())

            walk_time = self.get_walking_time(walk_route)
            station.walk_route = walk_route["coords"]
            station.walkingtime = walk_time

            # For test only: Reduce walking time to get better results
            # station.walkingtime = datetime.timedelta(0,station.walkingtime.seconds*0.25)
            if type(station.departuretime) is datetime.datetime and (
                time + station.walkingtime) < station.departuretime:
                if best_station == -1 or best_station.walkingtime < station.walkingtime:
                    best_station = station
            else:  # If this Stop cannot be reached via walking, its not likley the next stop can be reached
                break

        if best_station != -1:
            return best_station
        else:
            # No station is in range to walk to
            if userpos == route.origin_stop.get_coords():  # User is right at the station
                route.origin_stop.walk_route = []
                route.origin_stop.walkingtime = datetime.timedelta(0, 0)
            else:
                # Do the walking search for the origin stop, when no better station was found
                walk_route = get_walking_Route(userpos, route.origin_stop.get_coords())
                walk_time = self.get_walking_time(walk_route)
                route.origin_stop.walk_route = walk_route
                route.origin_stop.walkingtime = walk_time
            return route.origin_stop

    def find_startstations(self, start, dest, time=-1):
        """

        Looks up the recommended route and try to find a station within range to walk to in time

        :param start: the startposition
        :param dest: the destination
        :param time: -1 before setting
        :return: Stop
        """

        # Get start and destination positions
        userpos = start
        destpos = dest
        TIMER.start("find_startstations")
        routes = self.get_routes(userpos, destpos, time)

        # If no time was set, take the current one
        if time == -1:
            time = datetime.datetime.now()

        if type(routes) == int:
            return routes

        tmplist = []
        for route in routes:
            tmplist.append([route, userpos, time])

        queue = Q.Queue()
        resultlist = []
        # Create worker threads
        for x in range(8):
            worker = SeachWorker(queue, resultlist, self)
            # Setting daemon to True will let the main thread exit even though the workers are blocking
            worker.daemon = True
            worker.start()

        for tmproute in tmplist:
            queue.put(tmproute)

        queue.join()

        startstations = []
        for result in resultlist:
            if result != -1:  # Remove walkonly routes
                startstations.append(result)

        for station in startstations:
            if station.walkingtime == -1:
                print("ERROR: Walking time shouldn't be -1")
        TIMER.printTimer("find_startstations")
        return startstations

    def get_routes(self, start, dest, dtime=-1):
        """
            Finds the routes from A to B directly from EFA

        :param start: the startposition
        :param dest:  the destination
        :param dtime:  the destination time
        :return: a list of routes
        """
        data = get_efa_routes(start, dest, dtime)
        code = self.checkValidJson(data)
        if code == 0:
            routes = []
            for route in data["trips"]:
                r = Route(route)
                if not r.isWalkOnly():
                    if r.departure_time > dtime:
                        routes.append(r)
            return routes
        else:
            return int(code)

    def get_walking_time(self, walking_route):
        """
        Returns the walkingtime of the walkroute, which may be modified by a different walkingspeed
        :param walking_route: the dic returned by get_walking_Route
        :return: the walkingtime
        """
        modified_secondsonly = walking_route["walkingtime"] / float(self.session[SPEED])

        return datetime.timedelta(0, int(modified_secondsonly))  # days, seconds, then other fields.

    def get_walking_coords(self, walking_route):
        """
        Searches for a walking route and returns the coordinates on this route from start to destination
        :param walking_route: the XML returned by get_walking_Route
        :return: list of coords
        """
        if walking_route == []:
            return []

        coords = []

        for waypoint in walking_route[1][0][1][0]:
            arr = waypoint.text.split(" ")
            coords.append(Coord(arr[1], arr[0]))
        shortcut = []
        coords = replace_coordlist(coords, FH_LONGWAY1, [])
        return replace_coordlist(coords, FH_LONGWAY2, shortcut)

    # Insert a new startpoint where the route should begin
    def insert_start_point(self, start, walktime, route):
        """

        Inserts the given point of the user into the path(List) variable of the given route as first stop
        :param walktime: walking time from stop object
        :param start: in coordinates [lat,lng]
        :param route: the route-object
        :return: the route-object
        """
        stop = Stop("Your Position", start[0], start[1], isWalking=1)
        stop.walkingtime = walktime

        route.path.insert(0, stop)
        return route

    def get_stoplist(self, place, coords):
        """
            Searches for the closes matching stops with the same name as the given one.
        :param place: the first few letters of the desired stop
        :param coords: [longitude,latitude]
        :return: a list of Stops each containts the stopid and the name
        """
        data = get_matching_stations(place, coords)

        stops = []
        city = closestCity(coords[0], coords[1])
        if city == 'Augsburg':
            if 'message' in data["stopFinder"] and data["stopFinder"]["message"][1]["value"] == "stop invalid":
                print("No stop suggestions found ")
            elif len(data["stopFinder"]["points"]) == 1:  # One Result only must be handled differently, because of JSON
                point = data["stopFinder"]["points"]["point"]
                stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))
            else:
                for point in data["stopFinder"]["points"]:
                    stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))
        elif city == 'Basel':
            if 'message' in data and data['message'][1]["value"] == "stop invalid":
                print("No stop suggestions found ")
            elif len(data["stopFinder"]) == 1:
                point = data["stopFinder"]["point"]
                stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))
            else:
                for point in data["stopFinder"]:
                    stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))

        stops = sorted(stops, reverse=True, key=lambda efaStop: efaStop.quality)
        return stops

    def checkValidJson(self, json):
        """
            Check the json for common errors like:
                - No json at all
                - Origin or destination not found

        :param json:
        :return: 0= Everything okay; else the spesific errornumber
        """
        if "trips" not in json or json["trips"] is None:
            print("ERR: No timetable received")
            return 5

        if "message" in json["destination"]:
            print("Destination unknown")
            return json["destination"]["message"][0]["value"]

        if "message" in json["origin"]:
            print("Origin unknown")
            return json["origin"]["message"][0]["value"]

        return 0
