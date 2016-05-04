import datetime
import json
from xml.etree import ElementTree
import urllib
from route import Route, Stop
import datetime
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

def get_optimized_routes(start, dest):
    """
    Finds the purfect Route with walking opmimazation included

    :rtype: Route
    :param start(Coordinates): the startposition where the user currently is
    :param dest: the destionation where the user want to go
    :return: : the route
    """
    startstations = find_startstations(start, dest)
    if type(startstations) == int:
        return startstations

    routes =  []
    #Do the routesearch again with the new station
    for station in startstations:
        routes_list = get_routes(station.get_coords(), dest)
        if type(routes_list) == int:
            return routes_list

        for route in routes_list:
            routes.append(route)

    #Add the startposition of the user to the final route
    #route = insertStartPoint(start,route)
    for i in range(routes.__len__()):
        routes[i].id = i
    return routes


def find_startstations(start, dest):
    """

    Looks up the recommended route and try to find a station within range to walk to in time

    :param start: the startposition
    :param dest: the destination
    :return: Stop
    """
    # Get start and destination positions
    userpos = start
    destpos = dest

    routes = get_routes(userpos, destpos)

    if type(routes) == int:
        return routes
    startstations = []
    for route in routes:
        # Get the next 5 stations of this line
        station_list = route.get_next_stops()

        best_station = -1

        # Step through stations to find a better one
        for station in station_list:

            # Calculate the time to walk to the given station
            walk_time = get_walking_time(userpos, station.name)
            station.walkingtime = walk_time
            print("Walkingtime: " + walk_time.__str__())

            # If there is enough time to walk, save this station
            current_date_time = datetime.datetime.now()

            print("to " + station.name + ": "+(current_date_time+station.walkingtime).time().__str__() +
                  " <? " + station.depaturetime.time().__str__())

            #For test only: Reduce walkking time to get better results
            station.walkingtime = datetime.timedelta(0,station.walkingtime.seconds*0.25)
            if (current_date_time + station.walkingtime) < station.depaturetime:
                if best_station == -1 or best_station.walkingtime < station.walkingtime :
                    best_station = station

        if best_station != -1:
            station_list.append(best_station)
        else:
            # No station is in range to walk to
            station_list.append(route.origin_stop)
    return station_list

def get_routes(start, dest):
    """
        Finds the currently best route from A to B

    :param start: the startposition
    :param dest:  the destination
    :return: a route
    """
    lat, lon = start[0], start[1]
    origin = urllib.quote((str(lon) + ":" + str(lat) + ":WGS84").encode('utf-8'))
    destination = urllib.quote(dest.encode('utf-8'))
    typeStart = "coord"
    typeDest="stop"

    # url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON&" +\
    #       "locationServerActive=1&coordOutputFormat=WGS84[DD.ddddd]&" +\
    #       "type_origin="+typeStart+"&name_origin="+origin+\
    #       "&type_destination="+typeDest+ "&name_destination="+ destination

    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON&" + \
          "locationServerActive=1&coordOutputFormat=WGS84[DD.ddddd]&" + \
          "type_origin=" + typeStart + "&name_origin=" + origin + \
          "&type_destination=" + typeDest + "&name_destination=" + destination

    print(url)

   # with open('C:\json', 'r') as myfile:
    #    data = myfile.read()
    #data =  json.loads(data)
    data = getJson(url)

   # text_file = open("json", "w")
   # text_file.write("%s" % json)
   # text_file.close()
    code = checkValidJson(data)
    if code == 0:
        routes = []
        for route in data["trips"]:
           r = Route(route)
        #   if r.depature_time > datetime.datetime.utc():
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
    :return:
    """
    if "trips" not in json:
        print("ERR: No timetable recieved")
        return 5
    if "message" in json["destination"]:
       print("Destination unkown")
       return json["destination"]["message"][0]["value"]

    if "message" in json["origin"]:
        print("Origin unkown")
        return json["origin"]["message"][0]["value"]
    return 0

def get_walking_time(origin, destination):
    """

    Searches for a route to walk from A to B

    :param origin: startposition
    :param destination: destination
    :return: a datetime
    """
    if type(origin)!= list:
        return -1

    origin = urllib.quote((str(origin[0])+","+str(origin[1])).encode('utf-8'))
    destination = urllib.quote(destination.encode('utf-8'))
    key = "AIzaSyBjJpvBA_6NUhTuWs9lAIZpaMUKdmkH4T0"
    url = "https://maps.googleapis.com/maps/api/directions/json?" +\
          "origin=" + origin + "&destination="+ destination +\
          "&mode=walking" +"&key=" + key
    data = getJson(url)
    seconds = data["routes"][0]["legs"][0]["duration"]["value"]
    return datetime.timedelta(0,seconds)  # days, seconds, then other fields.


# Insert a new startpoint where the route should begin
def insertStartPoint(start,route):
    coords = get_coords(start)
    route.path.insert(0, Stop(start,coords[0],coords[1]))
    return route

    pass

def get_nearest_stop(coords):
    """
        Finds the nearest station for the given location

    :param coords: [latitude,longitude]
    :return: the closest stop's name
    """
    lat,lon=coords[0],coords[1]
    origin = urllib.quote((lon+":"+lat+":WGS84").encode('utf-8'))
    type = "coord"
    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?" + \
          "type_origin=" + type + "&name_origin=" + origin
    data = getXML(url)
    stop = data[1][1].find('itdOdvAssignedStops')[0]

    return stop.get('nameWithPlace') #extract the station's name

def get_coords(place):
    """

    Looks up the given name, try to find a place with the same name
    and returns the coords

    :param place: the place
    :return: [latitude,longitude]
    """

    key = "AIzaSyAV52eNjBjVhoTtaOwdWbd8iQ7Cia6X9c0"
    optionalSecondKey = "AIzaSyCVP9DkstDfjlTYgj0XlU5YlzU9gI3pqOU"
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + key
    data = getJson(url)
    lat = data["results"][0]["geometry"]["location"]["lat"]
    long = data["results"][0]["geometry"]["location"]["lng"]
    return [lat,long]


def getJson(url):
    """
    Downloads the json from the given URL and converts it into a json object
    :param url: the url
    :return: a json
    """
    response = urllib.urlopen(url)
    return json.loads(response.read())

def getXML(url):
    """
    Downloads the XML from the given URL and converts it into an ElementTree
    :param url: the url
    :return: ElementTree root Element
    """
    response = urllib.urlopen(url)
    response_string = response.read()
    xmldoc = ElementTree.fromstring(response_string)
    return xmldoc



#Test
origin = "Hirblingen Augsburg"
destination = "fachhochschule Augsburg"
#find_startstation(origin, destination)
#get_nearest_stop(['48.358411', '10.9073826'])



#   findStation(destination)


#write json to File
# target = open("C:\json", 'w')
#
#     print "Truncating the file.  Goodbye!"
#     target.truncate()
#     target.write(response.read())
#     target.close();