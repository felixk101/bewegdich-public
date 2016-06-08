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


def distance(lon1, lat1, lon2, lat2):
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


def closestCity(longitude, latitude):
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
        dist = distance(city.long, city.lat, float(longitude), float(latitude))
        if (dist < min_radius):
            return city.cityname
    # throw error here
    return ''


def getCityUrl(longitude, latitude):
    """
    Returns the city url

    :rtype: Route
    :param longitude: Longitude
    :param latitude: Latitude
    :return: City url
    """
    city = closestCity(longitude, latitude)

    if (city == 'Augsburg'):
        return "http://efa.avv-augsburg.de/avv/"
    elif (city == 'Basel'):
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


def get_optimized_routes(start, dest, time=-1):
    """
    Finds the perfect Route with walking opmimazation included

    :rtype: Route
    :param start: (Coordinates) the startposition where the user currently is
    :param dest: the stopid where the user want to go
    :param time: the time when the user wants to start
    :return: the optimized routes as a list
    """
    # If no time was set, take the current one
    if time == -1:
        time = datetime.datetime.now()

    try:  # Check if the dest is really a stopID
        int(dest)
    except ValueError:
        print("Error: Destination was not a stopID")
        return 8

    startstations = find_startstations(start, dest, time)
    if type(startstations) == int:
        return startstations

    routes = []
    id = 0
    # Do the routesearch again with the new station
    for station in startstations:

        # The User has to walk to the first station

        starttime = time + station.walkingtime

        routes_list = get_routes(station.get_coords(), dest, starttime)
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

            insert_start_point(start, station.walkingtime, route)
            route.walkingPath = get_walking_coords(start, route.origin_stop.get_coords())

            route.duration = route.duration + station.walkingtime
            route.id = id
            id += 1
            routes.append(route)

    routes = sorted(routes, key=lambda route: route.depature_time)
    return routes


def find_best_station(parameters):
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
    for station in station_list:
        # Calculate the time to walk to the given station
        walk_time = get_walking_time(userpos, station.get_coords())
        station.walkingtime = walk_time

        # For test only: Reduce walking time to get better results
        # station.walkingtime = datetime.timedelta(0,station.walkingtime.seconds*0.25)
        if type(station.depaturetime) is datetime.datetime and (time + station.walkingtime) < station.depaturetime:
            if best_station == -1 or best_station.walkingtime < station.walkingtime:
                best_station = station
        else:  # If this Stop cannot be reached via walking, its not likley the next stop can be reached
            print("### Stop station search")
            break

    if best_station != -1:
        return best_station
    else:
        # No station is in range to walk to
        return route.origin_stop


def find_startstations(start, dest, time=-1):
    """

    Looks up the recommended route and try to find a station within range to walk to in time

    :param start: the startposition
    :param dest: the destination
    :return: Stop
    """
    # Get start and destination positions
    userpos = start
    destpos = dest

    routes = get_routes(userpos, destpos, time)

    # If no time was set, take the current one
    if (time == -1):
        time = datetime.datetime.now()

    if type(routes) == int:
        return routes

    tmplist = []
    for route in routes:
        tmplist.append([route, userpos, time])

    # These Lines to the search parallel. Sometimes there where errors,
    # but that could be because of the bad internet connection
    pool = Pool()
    startstations = pool.map(find_best_station, tmplist)

    # The following lines do the search serial.
    # for route in tmplist:
    # startstations = []
    # startstations.append(find_best_station(route))


    while [].__contains__(-1):  # Remove walkonly routes
        startstations.remove(-1)

    for station in startstations:
        if station.walkingtime == -1:
            print("ERROR: Walking time shouldn't be -1")

    return startstations


def get_routes(start, dest, dtime=-1):
    """
        Finds the routes from A to B directly from EFA

    :param start: the startposition
    :param dest:  the destination
    :param dtime:  the destination time
    :return: a list of routes
    """
    lat, lon = start[1], start[0]

    origin = urllib.quote((str(lon) + ":" + str(lat) + ":WGS84"))

    if dtime == -1:
        dtime = datetime.datetime.now()

    typeStart = "coord"
    typeDest = "stopID"

    param = {
        'outputFormat': 'JSON',
        'locationServerActive': 1,
        'coordOutputFormat': 'WGS84[DD.ddddd]',
        'type_origin': typeStart,
        'name_origin': origin,
        'type_destination': typeDest,
        'name_destination': dest
    }

    if datetime != -1:
        date = dtime.date().strftime("%Y%m%d")
        time = dtime.time().strftime("%H:%M")
        param.update({
            'itdDate': date,
            'itdTime': time,
            'itdTripDateTimeDepArr': 'dep'
        })

    url = getCityUrl(lon, lat) + "XML_TRIP_REQUEST2?" + urllib1.urlencode(param)
    data = get_json(url)

    code = checkValidJson(data)
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


def get_walking_Route(origin, destination):
    """
    Searches for a route to walk from A to B
    :param origin: startposition
    :param destination: destination
    :return: a json
    """
    if type(origin) != list or type(destination) != list:
        return -1

    origin = urllib.quote(str(origin[1]) + "," + str(origin[0]))
    destination = urllib.quote(str(destination[1]) + "," + str(destination[0]))
    key = "AIzaSyBjJpvBA_6NUhTuWs9lAIZpaMUKdmkH4T0"

    param = {
        'origin': origin,
        'destination': destination,
        'mode': 'walking',
        'key': key
    }
    url = "https://maps.googleapis.com/maps/api/directions/json?" + urllib1.urlencode(param)
    data = get_json(url)

    return data


def get_walking_time(origin, destination):
    """
    Searches for a walking route and returns the time
    :param origin: startposition
    :param destination: destination
    :return: the walkingtime
    """
    data = get_walking_Route(origin, destination)
    seconds = data["routes"][0]["legs"][0]["duration"]["value"]
    return datetime.timedelta(0, seconds)  # days, seconds, then other fields.


def get_walking_coords(origin, destination):
    """
    Searches for a walking route and returns the coordinates on this route from start to destination
    :param origin: startposition
    :param destination: destination
    :return: list of coords
    """
    data = get_walking_Route(origin, destination)

    coords = []
    for waypoint in data["routes"][0]["legs"][0]["steps"]:
        from models import Coord
        coord = Coord(waypoint["start_location"]["lat"], waypoint["start_location"]["lng"])
        coords.append(coord)

    return coords


# Insert a new startpoint where the route should begin
def insert_start_point(start, walktime, route):
    """

    Inserts the given point of the user into the path(List) variable of the given route as first stop
    :param start: in coordinates [lat,lng]
    :param route: the route-object
    :return: the route-object
    """
    stop = Stop("Your Position", start[0], start[1], isWalking=1)
    stop.walkingtime = walktime

    route.path.insert(0, stop)
    return route


def get_nearest_stop(coords):
    """
        Finds the nearest station for the given location

    :param coords: [latitude,longitude]
    :return: the closest stop's name
    """
    lat, lon = coords[0], coords[1]
    origin = urllib.quote(lon + ":" + lat + ":WGS84")
    type = "coord"

    param = {
        'type_origin': type,
        'name_origin': origin
    }
    url = getCityUrl(lon, lat) + "XML_TRIP_REQUEST2?" + urllib1.urlencode(param)
    data = getXML(url)

    stop = data[1][1].find('itdOdvAssignedStops')[0]

    return stop.get('nameWithPlace')  # extract the station's name


def get_coords(place, start):
    """

    Looks up the given name, try to find a place with the same name
    and returns the coords

    :param place: a string
    :param start: [latitude,longitude]
    :return: [latitude,longitude]
    """
    param = {
        'outputFormat': 'JSON',
        'coordOutputFormat': 'WGS84[DD.ddddd]',
        'type_origin': 'any',
        'name_origin': place,
        'anyObjFilter_origin': 2
    }
    url = getCityUrl(start[0], start[1]) + "XML_TRIP_REQUEST2?" + urllib1.urlencode(param)
    data = get_json(url)

    coords = data["origin"]["points"]["point"]["ref"]["coords"].split(",")
    return coords

    key = "AIzaSyAV52eNjBjVhoTtaOwdWbd8iQ7Cia6X9c0"
    optionalSecondKey = "AIzaSyCVP9DkstDfjlTYgj0XlU5YlzU9gI3pqOU"

    param = {
        'address': place,
        'key': key
    }
    url = "https://maps.googleapis.com/maps/api/geocode/json?" + urllib1.urlencode(param)
    data = get_json(url)

    lat = data["results"][0]["geometry"]["location"]["lat"]
    long = data["results"][0]["geometry"]["location"]["lng"]

    return [lat, long]


def get_stoplist(place, coords):
    """
        Searches for the closes matching stops with the same name as the given one.
    :param place: the first few letters of the desired stop
    :param coords: [latitude,longitude]
    :return: a list of Stops each containts the stopid and the name
    """
    param = {
        'outputFormat': 'JSON',
        'coordOutputFormat': 'WGS84[DD.ddddd]',
        'type_sf': 'stop',
        'name_sf': place
    }
    url = getCityUrl(coords[0], coords[1]) + "XML_STOPFINDER_REQUEST?" + urllib1.urlencode(param)
    data = get_json(url)

    stops = []

    city = closestCity(coords[0], coords[1])
    if (city == 'Augsburg'):
        if ('message' in data["stopFinder"] and data["stopFinder"]["message"][1]["value"] == "stop invalid"):
            print("No stop suggestions found ")
        elif len(data["stopFinder"]["points"]) == 1:  # One Result only must be handled differently, because of JSON
            point = data["stopFinder"]["points"]["point"]
            stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))
        else:
            for point in data["stopFinder"]["points"]:
                stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))
    elif (city == 'Basel'):
        if ('message' in data and data['message'][1]["value"] == "stop invalid"):
            print("No stop suggestions found ")
        elif len(data["stopFinder"]) == 1:
            point = data["stopFinder"]["point"]
            stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))
        else:
            for point in data["stopFinder"]:
                stops.append(efaStop(point["ref"]["id"], point["name"], point["ref"]["omc"]))

    stops = sorted(stops, reverse=True, key=lambda efaStop: efaStop.quality)
    return stops


def checkValidJson(json):
    """
        Check the json for common errors like:
            - No json at all
            - Origin or destination not found

    :param json:
    :return: 0= Everything okay; else the spesific errornumber
    """
    if "trips" not in json or json["trips"] == None:
        print("ERR: No timetable received")
        return 5

    if "message" in json["destination"]:
        print("Destination unknown")
        return json["destination"]["message"][0]["value"]

    if "message" in json["origin"]:
        print("Origin unknown")
        return json["origin"]["message"][0]["value"]

    return 0


def get_json(url):
    """
    Downloads the json from the given URL and converts it into a json object
    :param url: the url
    :return: a json
    """
    response = urllib.urlopen(url, timeout=10)
    return json.loads(response.read())


def getXML(url):
    """
    Downloads the XML from the given URL and converts it into an ElementTree
    :param url: the url
    :return: ElementTree root Element
    """
    response = urllib.urlopen(url, timeout=2)
    response_string = response.read()
    xmldoc = ElementTree.fromstring(response_string)
    return xmldoc
