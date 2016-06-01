import datetime
import json
from xml.etree import ElementTree
import urllib2 as urllib
from route import Route, Stop
import datetime
from multiprocessing import Pool
from models import efaStop
# coding: utf8
"""
 Nutzerposition holen
 Zielposition holen
 schnellste Route von Start nach Ziel berechnen
 Filtern der Einstiegsstation, Endstation(Richtung) und Abfahrtszeit dieser Route
 Naechsten z.b. 5 Stationen in Fahrtrichtung der Linie holen
 Abfahrtszeiten der 5 Stationen holen
 Gehzeit zwischen Nutzerposition und den 5 Stationen berechnen
 Vergleichen der Gehzeit und den Abfahrszeiten

 Gehe die 5 Stationen durch
 	Wenn aktuelleZeit + Gehzeit < Abfahrszeit
 		diese Station als start setzen

# Returns the best Route
"""


def get_optimized_routes(start, dest, time=-1):
    """
    Finds the purfect Route with walking opmimazation included

    :rtype: Route
    :param start: (Coordinates) the startposition where the user currently is
    :param dest: the destionation where the user want to go
    :param time: the time when the user wants to start
    :return: the optimized routes as a list
    """
    # If no time was set, take the current one
    if time == -1:
        time = datetime.datetime.now()

    startstations = find_startstations(start, dest, time)
    if type(startstations) == int:
        return startstations

    routes = []
    id = 0
    # Do the routesearch again with the new station
    for station in startstations:

        #The User has to walk to the first station

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
                # print("Found duplicate " + str(route.origin_stop) + " at " + str(route.depature_time))
                continue
            if station.walkingtime != -1:
                route.depature_time = route.depature_time - station.walkingtime

            insert_start_point(start, station.walkingtime, route)
            route.walkingPath = get_walking_coords(start, route.origin_stop.get_coords())

            route.duration = route.duration + station.walkingtime
            route.id = id
            id = id + 1
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
        print("Walkingtime: " + walk_time.__str__())

        # If there is enough time to walk, save this station
        print("to " + station.name + ": " + (time + station.walkingtime).time().__str__() +
              " <? " + station.depaturetime.__str__())

        # For test only: Reduce walkking time to get better results
        # station.walkingtime = datetime.timedelta(0,station.walkingtime.seconds*0.25)
        if type(station.depaturetime) is datetime.datetime and (time + station.walkingtime) < station.depaturetime:
            if best_station == -1 or best_station.walkingtime < station.walkingtime:
                best_station = station

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
    startstations = []
    tmplist = []
    for route in routes:
        tmplist.append([route,userpos,time])

    pool = Pool()
    startstations = pool.map(find_best_station, tmplist)
    while [].__contains__(-1): #Remove walkonly routes
        startstations.remove(-1)

    for station in startstations:
        if station.walkingtime == -1:
            print("ERROR: Walkingtime shouldnt be -1")
    return startstations


def get_routes(start, dest, dtime = -1):
    """
        Finds the routes from A to B directly from EFA

    :param start: the startposition
    :param dest:  the destination
    :return: a list of routes
    """
    lat, lon = start[1], start[0]
    origin = urllib.quote((str(lon) + ":" + str(lat) + ":WGS84").encode('utf-8'))
    destination = urllib.quote(dest.encode('utf-8'))
    if dtime == -1:
        dtime = datetime.datetime.now()

    typeStart = "coord"
    typeDest = "stop"

    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON&" + \
          "locationServerActive=1&coordOutputFormat=WGS84[DD.ddddd]&" + \
          "type_origin=" + typeStart + "&name_origin=" + origin + \
          "&type_destination=" + typeDest + "&name_destination=" + destination

    if datetime != -1:
        date = dtime.date().strftime("%Y%m%d")
        time = dtime.time().strftime("%H:%M")
        url += "&itdDate=" + date + "&itdTime=" + time + "&itdTripDateTimeDepArr=dep"

    print(url)

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


def checkValidJson(json):
    """
        Check the json for common errors like:
            - No json at all
            - Origin or destination not found

    :param json:
    :return: 0= Everything okay; else the spesific errornumber
    """
    if "trips" not in json or json["trips"] == None:
        print("ERR: No timetable recieved")
        return 5
    if "message" in json["destination"]:
        print("Destination unkown")
        return json["destination"]["message"][0]["value"]

    if "message" in json["origin"]:
        print("Origin unkown")
        return json["origin"]["message"][0]["value"]
    return 0


def get_walking_Route(origin, destination):
    """
    Searches for a route to walk from A to B
    :param origin: startposition
    :param destination: destination
    :return: a json
    """
    if type(origin) != list or type(destination) != list:
        return -1

    origin = urllib.quote((str(origin[1]) + "," + str(origin[0])).encode('utf-8'))
    destination = urllib.quote((str(destination[1]) + "," + str(destination[0])).encode('utf-8'))
    key = "AIzaSyBjJpvBA_6NUhTuWs9lAIZpaMUKdmkH4T0"
    url = "https://maps.googleapis.com/maps/api/directions/json?" + \
          "origin=" + origin + "&destination=" + destination + \
          "&mode=walking" + "&key=" + key
    data = get_json(url)
    return data

def get_walking_time(origin, destination):
    """
    Searches for a walking route and returns the time
    :param origin: startposition
    :param destination: destination
    :return: the walkingtime
    """
    data = get_walking_Route(origin,destination)
    seconds = data["routes"][0]["legs"][0]["duration"]["value"]
    return datetime.timedelta(0, seconds)  # days, seconds, then other fields.

def get_walking_coords(origin,destination):
    """
    Searches for a walking route and returns the coordinates on this route from start to destination
    :param origin: startposition
    :param destination: destination
    :return: list of coords
    """
    data = get_walking_Route(origin, destination)

    coords = []
    for waypoint in data["routes"][0]["legs"][0]["steps"]:
        coords.append(waypoint["start_location"]["lat"])
        coords.append(waypoint["start_location"]["lng"])

    return coords

# Insert a new startpoint where the route should begin
def insert_start_point(start, walktime, route):
    """

    Inserts the given point of the user into the path(List) variable of the given route as first stop
    :param start: in coordinates [lat,lng]
    :param route: the route-object
    :return: the route-object
    """
    stop = Stop("Ihre Position", start[0], start[1], isWalking=1)
    stop.walkingtime = walktime

    route.path.insert(0,stop )
    return route


def get_nearest_stop(coords):
    """
        Finds the nearest station for the given location

    :param coords: [latitude,longitude]
    :return: the closest stop's name
    """
    lat, lon = coords[0], coords[1]
    origin = urllib.quote((lon + ":" + lat + ":WGS84").encode('utf-8'))
    type = "coord"
    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?" + \
          "type_origin=" + type + "&name_origin=" + origin
    data = getXML(url)
    stop = data[1][1].find('itdOdvAssignedStops')[0]

    return stop.get('nameWithPlace')  # extract the station's name


def get_coords(place):
    """

    Looks up the given name, try to find a place with the same name
    and returns the coords

    :param place: a string
    :return: [latitude,longitude]
    """
    place = urllib.quote(place)
    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON" \
          "&coordOutputFormat=WGS84[DD.ddddd]&" \
          "type_origin=any&" \
          "name_origin=" + place + \
          "&anyObjFilter_origin=2"
    data = get_json(url)
    coords = data["origin"]["points"]["point"]["ref"]["coords"].split(",")
    return coords

    key = "AIzaSyAV52eNjBjVhoTtaOwdWbd8iQ7Cia6X9c0"
    optionalSecondKey = "AIzaSyCVP9DkstDfjlTYgj0XlU5YlzU9gI3pqOU"
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + key
    data = get_json(url)
    lat = data["results"][0]["geometry"]["location"]["lat"]
    long = data["results"][0]["geometry"]["location"]["lng"]
    return [lat, long]


def get_stoplist(place):
    """
        Searches for the closes matching stops with the same name as the given one.
    :param place: the first few letters of the desired stop
    :return: a list of Stops each containts the stopid and the name
    """
    place = urllib.quote(place)
    url = "http://efa.avv-augsburg.de/avv/XML_STOPFINDER_REQUEST?outputFormat=JSON" \
          "&coordOutputFormat=WGS84[DD.ddddd]&" \
          "type_sf=stop&" \
          "name_sf=" + place

    data = get_json(url)
    stops = []
    for point in data["stopFinder"]["points"]:
        stops.append(efaStop(point["ref"]["id"],point["name"], point["ref"]["omc"]))


    stops = sorted(stops,reverse=True, key=lambda efaStop: efaStop.quality)
    return stops


def get_json(url):
    """
    Downloads the json from the given URL and converts it into a json object
    :param url: the url
    :return: a json
    """
    response = urllib.urlopen(url,timeout=10)
    return json.loads(response.read())


def getXML(url):
    """
    Downloads the XML from the given URL and converts it into an ElementTree
    :param url: the url
    :return: ElementTree root Element
    """
    response = urllib.urlopen(url,timeout=2)
    response_string = response.read()
    xmldoc = ElementTree.fromstring(response_string)
    return xmldoc

#get_stoplist("hauptbahnhof")