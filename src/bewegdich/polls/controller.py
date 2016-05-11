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

def get_optimized_routes(start, dest,datetime = -1):
    """
    Finds the purfect Route with walking opmimazation included

    :rtype: Route
    :param start(Coordinates): the startposition where the user currently is
    :param dest: the destionation where the user want to go
    :return: : the route
    """
    startstations = find_startstations(start, dest,datetime)
    if type(startstations) == int:
        return startstations

    routes =  []
    #Do the routesearch again with the new station
    for station in startstations:
        routes_list = get_routes(station.get_coords(), dest,datetime)
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
            routes.append(route)

    #Add the startposition of the user to the final route

    for i in range(routes.__len__()):
        routes[i].id = i
        insert_start_point(start, routes[i])

    routes = sorted(routes, key=lambda route: route.depature_time)
    return routes


def find_startstations(start, dest, time = -1):
    """

    Looks up the recommended route and try to find a station within range to walk to in time

    :param start: the startposition
    :param dest: the destination
    :return: Stop
    """
    # Get start and destination positions
    userpos = start
    destpos = dest

    routes = get_routes(userpos, destpos,time)

    #If no time was set, take the current one
    if(time == -1):
        time = datetime.datetime.now()

    if type(routes) == int:
        return routes
    startstations = []
    for route in routes:
        # Get the next 5 stations of this line
        station_list = route.get_next_stops()
        if route.isWalkOnly():
            continue

        best_station = -1

        # Step through stations to find a better one
        for station in station_list:
            # Calculate the time to walk to the given station
            walk_time = get_walking_time(userpos, station.get_coords())

            station.walkingtime = walk_time
            print("Walkingtime: " + walk_time.__str__())


            # If there is enough time to walk, save this station
            print("to " + station.name + ": "+(time+station.walkingtime).time().__str__() +
                  " <? " + station.depaturetime.__str__())

            #For test only: Reduce walkking time to get better results
            #station.walkingtime = datetime.timedelta(0,station.walkingtime.seconds*0.25)
            if type(station.depaturetime) is datetime.datetime and (time + station.walkingtime) < station.depaturetime:
                if best_station == -1 or best_station.walkingtime < station.walkingtime :
                    best_station = station

        if best_station != -1:
            startstations.append(best_station)
        else:
            # No station is in range to walk to
            startstations.append(route.origin_stop)
    return startstations

def get_routes(start, dest, datetime=-1):
    """
        Finds the currently best route from A to B

    :param start: the startposition
    :param dest:  the destination
    :return: a route
    """
    lat, lon = start[1], start[0]
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

    if datetime != -1:
        date = datetime.date().strftime("%Y%m%d")
        time = datetime.time().strftime("%H:%M")
        url += "&itdDate="+date+"&itdTime="+time+"&itdTripDateTimeDepArr=dep"

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

def get_walking_time(origin, destination):
    """

    Searches for a route to walk from A to B

    :param origin: startposition
    :param destination: destination
    :return: a datetime
    """
    if type(origin)!= list or type(destination) != list:
        return -1

    origin = urllib.quote((str(origin[1])+","+str(origin[0])).encode('utf-8'))
    destination = urllib.quote((str(destination[1]) + "," + str(destination[0])).encode('utf-8'))
    key = "AIzaSyBjJpvBA_6NUhTuWs9lAIZpaMUKdmkH4T0"
    url = "https://maps.googleapis.com/maps/api/directions/json?" +\
          "origin=" + origin + "&destination="+ destination +\
          "&mode=walking" +"&key=" + key
    data = getJson(url)
    seconds = data["routes"][0]["legs"][0]["duration"]["value"]
    return datetime.timedelta(0,seconds)  # days, seconds, then other fields.


# Insert a new startpoint where the route should begin
def insert_start_point(start, route):
    route.path.insert(0, Stop("Ihre Position", start[0], start[1]))
    return route


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
    place = urllib.quote(place)
    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON" \
          "&coordOutputFormat=WGS84[DD.ddddd]&" \
          "type_origin=any&" \
          "name_origin=" + place +\
          "&anyObjFilter_origin=2"
    data = getJson(url)
    coords = data["origin"]["points"]["point"]["ref"]["coords"].split(",")
    return coords

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