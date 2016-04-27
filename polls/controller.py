import datetime
import json
import urllib
from route import Route
import datetime
# coding: utf8

# Nutzerposition holen
# Zielposition holen
# schnellste Route von Start nach Ziel berechnen
# Filtern der Einstiegsstation, Endstation(Richtung) und Abfahrtszeit dieser Route
# Naechsten z.b. 5 Stationen in Fahrtrichtung der Linie holen
# Abfahrtszeiten der 5 Stationen holen
# Gehzeit zwischen Nutzerposition und den 5 Stationen berechnen
# Vergleichen der Gehzeit und den Abfahrszeiten
#
# Gehe die 5 Stationen durch
# 	Wenn aktuelleZeit + Gehzeit < Abfahrszeit
# 		diese Station als start setzen

# Returns the best Route
def get_optimized_route(start,dest):
    startstation = find_StartStation(start,dest)

    #Do the routesearch again with the new station
    route = getFastestRoute(startstation, dest)

    #Add the startposition of the user to the final route
    completeRoute = insertStartPoint(start,route)
    return completeRoute





def find_StartStation(start,dest):
    # Get start and destination positions
    userpos = start
    destpos = dest

    route = getFastestRoute(userpos, destpos)

    # Get the next 5 stations of this line
    stationList = route.get_next_stops()

    # Get the depaturetimes of the stations at the given time
    #depatureTimes = getDepatuertimes(stationList, depature_time)

    # Step through stations
    for station in stationList:

        # Calculate the time to walk to the given station
        walkTime = getWalkingTime(userpos, station.name)

        # If there is enough time to walk, return this station
        currentDateTime = datetime.datetime.utcnow()
        print((currentDateTime+walkTime).__str__() + " < " + station.depaturetime.__str__())
        if (currentDateTime+walkTime) < station.depaturetime:
            return station

    # No station is in range to walk to
    return route.origin_stop

# Returns the fastest route from start to dest
def getFastestRoute(start, dest):
    origin = urllib.quote(start.encode('utf-8'))
    destination = urllib.quote(dest.encode('utf-8'))
    type="stop"
    url = "http://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?outputFormat=JSON&locationServerActive=1&" +\
          "type_origin="+type+"&name_origin="+origin+\
          "&type_destination="+type+ "&name_destination="+ destination
    print(url)
    json = getJson(url)
    for route in json["trips"]:
        r = Route(route)
        if r.depature_time > datetime.datetime.utcnow():
            return r

    return route



# Returns a list of stations of that given line
def getLineList(route, number_of_stations=5):

    linelist = []
    for stop in route["legs"][0]["stopSeq"]:
        print(stop)
        linelist.append(stop)
    #Remove first item because its the originstop
    linelist.pop(0)
    linelist.pop(linelist.__len__()-1)
    return linelist


# Returns the time to walk from start to destition
def getWalkingTime(origin, destination):
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

def getCoords(place):
    key = "AIzaSyAV52eNjBjVhoTtaOwdWbd8iQ7Cia6X9c0"
    optionalSecondKey = "AIzaSyCVP9DkstDfjlTYgj0XlU5YlzU9gI3pqOU"
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + key
    data = getJson(url)
    lat = data["results"][0]["geometry"]["location"]["lat"]
    long = data["results"][0]["geometry"]["location"]["lng"]
    return [lat,long]


def getJson(url):
     response = urllib.urlopen(url)
     return json.loads(response.read())
  #  with open('C:\json', 'r') as myfile:
#     return json.loads(myfile.read())


#Test
origin = "Hauptbahnhof Augsburg"
destination = "fachhochschule Augsburg"
find_StartStation(origin,destination)

#write json to File

# target = open("C:\json", 'w')
#
#     print "Truncating the file.  Goodbye!"
#     target.truncate()
#     target.write(response.read())
#     target.close();