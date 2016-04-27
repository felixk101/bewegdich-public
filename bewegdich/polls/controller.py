import datetime

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

    route = getFastestRout(startstation,dest)
    completeRoute = insertStartPoint(start,route)
    return completeRoute

def find_StartStation(start,dest):
    # Get start and destination positions
    userpos = start
    destpos = dest

    route = getFastestRout(userpos, destpos)
    startstation = route["startstation"]
    endstation = route["endstation"]
    abfahrszeit = route["abfahrszeit"]

    # Get the next 5 stations of this line
    stationList = getLineList(startstation, endstation, 5)

    # Get the depaturetimes of the stations at the given time
    depatureTimes = getDepatuertimes(stationList, abfahrszeit)

    # Step through stations
    for station in stationList:

        # Calculate the time to walk to the given station
        walkTime = getWalkRoute(userpos, station)

        # If there is enough time to walk, return this station
        currentDateTime = datetime.datetime.now()

        if handle_time_things(currentDateTime,walkTime) < depatureTimes[station]:
            return station

    # No station is in range to walk to
    return startstation

# Returns the fastest route from start to dest
def getFastestRout(start, dest):
    pass

# Returns a list of stations of that given line
def getLineList(startstation, endstation, number_of_stations=5):
    pass
# Returns the depaturetimes of the given stations at the given time
def getDepatuertimes(stationList, abfahrszeit):
    pass

# Returns the time to walk from start to destition
def getWalkRoute(userpos, station):
    pass

# Cares about addidion with timevalues (e.g. next day)
def handle_time_things(currentDateTime,time_to_add):
    pass
# Insert a new startpoint where the route should begin
def insertStartPoint(start,route):
    pass