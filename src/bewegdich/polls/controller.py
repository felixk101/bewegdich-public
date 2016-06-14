# -*- coding: utf-8 -*-
import math
import json
import datetime
from collections import namedtuple
from xml.etree import ElementTree
import urllib as urllib1
import urllib2 as urllib
from route import Route, Stop
from multiprocessing import Pool
from models import efaStop
import time as t
import Queue as Q
from worker import SeachWorker, RoutesWorker
from views import *
from timer import Timer
from variables import SPEED
import xml.etree.ElementTree as ET
from models import Coord
TIMER = Timer()

class Controller(object):

    def __init__(self,session):
        # Saves the session object of one user
        self.session = session

        # Stores all calculated walking routes into this dic, so it doesn't need to be calculated again
        self.walking_routes = {}

    def distance(self, lon1, lat1, lon2, lat2):
        """
           Determines the distance for two sets of lon and lat
           :return: distance in meters
           """
        r = 6378.137  # Radius of earth in km
        dLat = (lat2 - lat1) * math.pi / 180
        dLon = (lon2 - lon1) * math.pi / 180
        a = math.sin(dLat / 2) * math.sin(dLat / 2) + \
            + math.cos(lat1 * math.pi / 180) * math.cos(lat2 * math.pi / 180) \
            * math.sin(dLon / 2) * math.sin(dLon / 2)
        c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
        d = r * c
        return d * 1000  # meters


    def closestCity(self, longitude, latitude):
        """

        Determines the closest city for a given latitude and longitude
        using a list of the supported cities

        :return: the city as a string
        """
        ##longitude, latitude
        City = namedtuple('blubb', ['cityname', 'long', 'lat'])
        cities = [
            City('Augsburg', 10.890779, 48.3705449),
            City('Basel', 7.58769, 47.55814)
        ]

        min_radius = 15000  # 15 km
        for city in cities:
            dist = self.distance(city.long, city.lat, float(longitude), float(latitude))
            if dist < min_radius:
                return city.cityname
        # throw error here
        return ''


    def getCityUrl(self, longitude, latitude):
        """
        Returns the city url

        :rtype: Route
        :param longitude: Longitude
        :param latitude: Latitude
        :return: City url
        """
        city = self.closestCity(longitude, latitude)

        if city == 'Augsburg':
            return "https://efa.avv-augsburg.de/avv/"
        elif city == 'Basel':
            return "http://www.efa-bvb.ch/bvb/"

        return ''


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


    def get_optimized_routes(self, start, dest, time=-1):
        """
        Finds the perfect Route with walking opmimazation included

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
            worker = RoutesWorker(queue, resultlist,self)
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
                # Search for Routes which are the same line but just a different depaturetime
                for tmp_route in routes:
                    if tmp_route.origin_stop.name == route.origin_stop.name and tmp_route.line == route.line:
                        duplicate_route = 1
                        break
                if duplicate_route == 1:
                    continue
                if station.walkingtime != -1:
                    route.depature_time = route.depature_time - station.walkingtime
                if route.origin_stop.stopid in self.walking_routes:  # if the walk was already calculated
                    route.walkingPath = self.get_walking_coords(self.walking_routes[route.origin_stop.stopid])
                else:  # else the walk has to be calculated
                    walking_route = self.get_walking_Route(start, route.origin_stop.get_coords())
                    route.walkingPath = self.get_walking_coords(walking_route)
                self.insert_start_point(start, station.walkingtime, route)
                route.duration = route.duration + station.walkingtime
                route.id = id
                id += 1
                routes.append(route)

        routes = sorted(routes, key=lambda route: route.depature_time)
        TIMER.printTimer("Whole search")
        return routes


    def find_best_station(self, parameters):
        """
            Optimized for parallel running
            This functions searches in the given route for that farest station to walk to and still catch the same bus

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

            walk_route = self.get_walking_Route(userpos, station.get_coords())
            duration = walk_route[1][0][0][0].text
            if "M" not in duration:
                print("BLUB")
                pass
            walk_time = self.get_walking_time(walk_route)
            station.walk_route = walk_route
            station.walkingtime = walk_time

            # For test only: Reduce walking time to get better results
            # station.walkingtime = datetime.timedelta(0,station.walkingtime.seconds*0.25)
            if type(station.depaturetime) is datetime.datetime and (time + station.walkingtime) < station.depaturetime:
                if best_station == -1 or best_station.walkingtime < station.walkingtime:
                    best_station = station
            else:  # If this Stop cannot be reached via walking, its not likley the next stop can be reached
                break

        if best_station != -1:
            return best_station
        else:
            # No station is in range to walk to
            if userpos == route.origin_stop.get_coords(): # User is right at the station
                route.origin_stop.walk_route = []
                route.origin_stop.walkingtime = datetime.timedelta(0, 0)
            else:
                # Do the walking search for the origin stop, when no better station was found
                walk_route = self.get_walking_Route(userpos, route.origin_stop.get_coords())
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
            worker = SeachWorker(queue, resultlist,self)
            # Setting daemon to True will let the main thread exit even though the workers are blocking
            worker.daemon = True
            worker.start()

        for tmproute in tmplist:
            queue.put(tmproute)

        queue.join()

        startstations = []
        for result in resultlist:
            if result != -1: # Remove walkonly routes
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

        lat, lon = start[1], start[0]
        if dtime == -1:
            dtime = datetime.datetime.now()

        param = {
            'outputFormat': 'JSON',
            'locationServerActive': 0,
            'coordOutputFormat': 'WGS84[DD.ddddd]',
            'type_origin': 'coord',
            'name_origin': (str(lon) + ":" + str(lat) + ":WGS84"),
            'type_destination': 'stopID',
            'name_destination': dest
        }

        if datetime != -1:
            param.update({
                'itdDate': dtime.date().strftime("%Y%m%d"),
                'itdTime': dtime.time().strftime("%H:%M"),
                'itdTripDateTimeDepArr': 'dep'
            })

        url = self.getCityUrl(lon, lat) + "XML_TRIP_REQUEST2?" + urllib1.urlencode(param)
        data = self.get_json(url)
        code = self.checkValidJson(data)
        if code == 0:
            routes = []
            for route in data["trips"]:
                r = Route(route)
                if not r.isWalkOnly():
                    if r.depature_time > dtime:
                        routes.append(r)
            return routes
        else:
            return int(code)

    def get_walking_Route(self, origin, destination):
        """
        Searches for a route to walk from A to B
        :param origin: startposition [lng,lat]
        :param destination: destination [lng,lat]
        :return: a xml treeobject
        """
        if type(origin) != list or type(destination) != list:
            return -1

        param = {
            'start': str(origin[0]) + "," + str(origin[1]),
            'end': str(destination[0]) + "," + str(destination[1]),
        }
        url = "http://www.openrouteservice.org/route?" \
              + urllib1.urlencode(param) + "" \
              "&via=&lang=de&distunit=KM&routepref=Pedestrian&weighting=Shortest&avoidAreas=&useTMC=false" \
              "&noMotorways=false&noTollways=false&noUnpavedroads=false&noSteps=false&noFerries=false" \
              "&instructions=false"
        data = self.get_xml(url)
        return data


    def get_walking_time(self,walking_route):
        """
        Searches for the walkingtime in the walking_route XML and returns it
        :param walking_route: the XML returned by get_walking_Route
        :return: the walkingtime
        """
        duration = walking_route[1][0][0][0].text
        if "M" not in duration:
            print("ERROR: Time should not be zer o")
            return datetime.timedelta(0, 0)
        times = duration.split("M")
        minutes = times[0][times[0].index("T")+1:]
        seconds = times[1][:times[1].index("S")]
        secondsonly = int(seconds + minutes) * 60

        modified_secondsonly = secondsonly * float(self.session[SPEED])

        return datetime.timedelta(0, modified_secondsonly)  # days, seconds, then other fields.


    def get_walking_coords(self,walking_route):
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
            coords.append(Coord(arr[1],arr[0]))
        return coords


    # Insert a new startpoint where the route should begin
    def insert_start_point(self,start, walktime, route):
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


    def get_stoplist(self,place, coords):
        """
            Searches for the closes matching stops with the same name as the given one.
        :param place: the first few letters of the desired stop
        :param coords: [latitude,longitude]
        :return: a list of Stops each containts the stopid and the name
        """
        param = {
            'outputFormat': 'JSON',
            'locationServerActive': 0,
            'coordOutputFormat': 'WGS84[DD.ddddd]',
            # 'type_origin': 'coord',
            # 'name_origin': (str(coords[0]) + ":" + str(coords[1]) + ":WGS84"),
            'type_sf': 'stop',
            # 'type_sf': 'any', # May makes sense (Destination is an address)
            'name_sf': place
        }
        url = self.getCityUrl(coords[0], coords[1]) + "XML_STOPFINDER_REQUEST?" + urllib1.urlencode(param)
        data = self.get_json(url)
        stops = []

        city = self.closestCity(coords[0], coords[1])
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


    def checkValidJson(self,json):
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


    def get_json(self,url):
        """
        Downloads the json from the given URL and converts it into a json object
        :param url: the url
        :return: a json
        """
        response = urllib.urlopen(url, timeout=10)
        return json.loads(response.read())

    def get_xml(self,url):
        """
        Downloads the XML from the given URL and converts it into a tree object
        :param url: the url
        :return: a treeobject
        """
        response = urllib1.urlopen(url)
        string = response.read()
        return ET.fromstring(string)

