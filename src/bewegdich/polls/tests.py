# coding: utf8
from django.test import TestCase

from controller import *

# Create your tests here.

print("Start Tests")

test_time = datetime.datetime(2016, 6, 1, 10, 0, 0, 0)


def test_get_routes(test_time):
    start = [10.90529, 48.35882]  # fachhochschule Augsburg
    routes = get_routes(start ,"augsburg hauptbahnhof",test_time)
    assert len(routes) is 4
    assert routes[0].origin_stop.name == "Augsburg Rotes Tor"
    assert routes[0].destination_stop.name ==  'Augsburg Hbf'
    assert routes[0].duration ==  datetime.time(0,10,0,0)
    assert len(routes[0].path) is 4
    assert routes[0].depature_time == datetime.datetime(2016, 6, 1, 9, 59, 0, 0)
    return routes


def test_get_next_stops(routes):
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


def test_find_startstations(test_time):
    start = [10.90529, 48.35882]  # fachhochschule Augsburg
    stations = find_startstations(start, "Augsburg Hbf", test_time)
    assert (len(stations) == 4)

    assert (stations[0].name == u'Augsburg Rotes Tor')
    assert (stations[0].depaturetime == datetime.datetime(2016, 6, 1, 9, 59, 0, 0))


def test_get_optimized_routes(test_time):
    start = [10.90529, 48.35882]  # fachhochschule Augsburg
    opt_routes = get_optimized_routes(start, "augsburg hauptbahnhof", test_time)

    #TODO:  Test to be filled with real data
    # assert(len(opt_routes[0].path) == 4)
    # assert(opt_routes[0].path[0].name == 'Ihre Position')
    # assert(opt_routes[0].path[1].name == u'Augsburg Rotes Tor')
    # assert(opt_routes[0].depature_time == datetime.datetime(2016, 6, 1, 9,59,0,0))
    # assert(opt_routes[0].duration == datetime.time(0,7,0,0))

    start2 = [10.90520, 48.35890]  # near the fachhochschule Augsburg station

    opt_routes = get_optimized_routes(start2, "augsburg hauptbahnhof", test_time)
    # assert (len(opt_routes.path) == -1)
    # assert (opt_routes.path[0].name == "blub")
    # assert (opt_routes.path[0].isWalking == 1)
    # assert (opt_routes.path[1].name == "blub2")
    # assert (opt_routes.depature_time == datetime.datetime(2016, 6, 1, 10, 0, 0, 0))
    # assert (opt_routes.duration == datetime.time(0, 10, 0, 0))

#routes = test_get_routes( test_time)
#test_get_next_stops(routes)
#test_find_startstations(test_time)
test_get_optimized_routes(test_time)

