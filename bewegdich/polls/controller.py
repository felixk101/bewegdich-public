import datetime
import json
import urllib
from route import Route
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

def get_optimized_route(start, dest):
    """
    Finds the purfect Route with walking opmimazation included

    :rtype: Route
    :param start: the startposition where the user currently is
    :param dest: the destionation where the user want to go
    :return: : the route
    """
    startstation = find_startstation(start, dest)

    #Do the routesearch again with the new station
    route = get_fastest_route(startstation.name, dest)

    #Add the startposition of the user to the final route
    #route = insertStartPoint(start,route)
    return route


def find_startstation(start, dest):
    """

    Looks up the recommended route and try to find a station within range to walk to in time

    :param start: the startposition
    :param dest: the destination
    :return: Stop
    """
    # Get start and destination positions
    userpos = start
    destpos = dest

    route = get_fastest_route(userpos, destpos)

    # Get the next 5 stations of this line
    station_list = route.get_next_stops()

    best_station = -1

    # Step through stations to find a better one
    for station in station_list:

        # Calculate the time to walk to the given station
        walk_time = get_walking_time(userpos, station.name)
        station.walkingtime = walk_time

        # If there is enough time to walk, save this station
        current_date_time = datetime.datetime.utcnow()

        print("to " + station.name + ": "+(current_date_time+walk_time).time().__str__() +
              " <? " + station.depaturetime.time().__str__())

        if (current_date_time + walk_time) < station.depaturetime:
            if best_station == -1 or best_station.walkingtime < station.walkingtime :
                best_station = station

    if best_station != -1:
        return best_station
    else:
        # No station is in range to walk to
        return route.origin_stop


def get_fastest_route(start, dest):
    """
        Finds the currently best route from A to B

    :param start: the startposition
    :param dest:  the destination
    :return: a route
    """
    origin = urllib.quote(start.encode('utf-8'))
    destination = urllib.quote(dest.encode('utf-8'))
    type="stop"
    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON&locationServerActive=1&" +\
          "type_origin="+type+"&name_origin="+origin+\
          "&type_destination="+type+ "&name_destination="+ destination
    print(url)
    json = getJson(url)
    if "trips" in json:
        for route in json["trips"]:
            r = Route(route)
            if r.depature_time > datetime.datetime.utcnow():
                return r
        return
    else:
        print("ERR: No timetable recieved")
        return


def get_walking_time(origin, destination):
    """

    Searches for a route to walk from A to B

    :param origin: startposition
    :param destination: destination
    :return: a datetime
    """

    origin = urllib.quote(origin.encode('utf-8'))
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

    pass


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


#Test
origin = "Hirblingen Augsburg"
destination = "fachhochschule Augsburg"
find_startstation(origin, destination)




#write json to File
# target = open("C:\json", 'w')
#
#     print "Truncating the file.  Goodbye!"
#     target.truncate()
#     target.write(response.read())
#     target.close();