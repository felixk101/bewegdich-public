# coding: utf8
from django.test import TestCase

from controller import *

# Create your tests here.

print("Start Tests")
#Test
origin = "Hirblingen Augsburg"
destination = "fachhochschule Augsburg"
start = [10.90529, 48.35882]  # fachhochschule Augsburg
#route = find_startstation(origin, destination)

test_time = datetime.datetime(2016, 6, 1, 10, 0, 0, 0)

routes = get_routes(start ,"augsburg hauptbahnhof",test_time)
assert len(routes) is 4
assert routes[0].origin_stop.name == "Augsburg Rotes Tor"
assert routes[0].destination_stop.name ==  'Augsburg Hbf'
assert routes[0].duration ==  datetime.time(0,10,0,0)
assert len(routes[0].path) is 4
assert routes[0].depature_time == datetime.datetime(2016, 6, 1, 9, 59, 0, 0)

stops = routes[0].get_next_stops()
assert len(stops) == 2
assert stops[0].depaturetime == datetime.datetime(2016, 6, 1, 10, 0, 0, 0)
assert stops[0].name == "Augsburg Th.-Heuss-Platz/IHK"

assert stops[1].depaturetime == datetime.datetime(2016, 6, 1, 10, 3, 0, 0)
assert stops[1].name == u'Augsburg Königsplatz'
assert stops[1].lat == "48.36533"
assert stops[1].lng == "10.89423"

walk_time = get_walking_time([stops[0].lat,stops[0].lng],[stops[1].lat,stops[1].lng])
assert walk_time.seconds == 759

stations = find_startstations([10.90529,48.35882],"Augsburg Hbf",test_time)
assert(len(stations) == 4)


assert(stations[0].name == u'Augsburg Rotes Tor')
assert(stations[0].depaturetime == datetime.datetime(2016, 6, 1, 9, 59, 0, 0))

# assert(stations[0].walkingtime.seconds == 1057)
#
# assert(stations[1].name == u'Augsburg Königsplatz')
# assert(stations[1].lat == u'48.36525')
# assert(stations[1].lng == u'10.89434')
#
# opt_routes = get_optimized_routes(start, "augsburg hauptbahnhof", test_time)
#
# print(opt_routes)


#assert stations[0].

#assert routes[0].path[0].depaturetime is datetime.datetime(2016,)

