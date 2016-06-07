# -*- coding: utf-8 -*-
from django.test import TestCase

from controller import *
import cPickle as pickle
# Create your tests here.

print("Start Tests")

test_time = datetime.datetime(2016, 6, 1, 10, 0, 0, 0)

def test_make_binary(test_time):
    start = [10.90529, 48.35882]  # fachhochschule Augsburg
    routes = get_routes(start ,"augsburg hauptbahnhof",test_time)
    assert (type(routes) is not int)
    file = open("static/route.txt", 'wb')
    assert(file is not None)
    pickle.dump(routes[0], file)
    file.close()

def test_load_binary():
    pkl_file = open('static/route.txt', 'rb')
    selected_route = pickle.load(pkl_file)
    pkl_file.close()
    assert (selected_route is not None)
    return selected_route

def test_get_routes(test_time):
    start = [10.90529, 48.35882]  # fachhochschule Augsburg
    routes = get_routes(start ,"augsburg hauptbahnhof",test_time)
    assert len(routes) is 3
    assert routes[0].origin_stop.name == "Hochschule Augsburg"
    assert routes[0].destination_stop.name ==  'Augsburg Hbf'
    assert routes[0].duration ==  datetime.time(0,9,0,0)
    assert len(routes[0].path) is 5
    assert routes[0].depature_time == datetime.datetime(2016, 6, 1, 10, 1, 0, 0)
    return routes


def test_get_next_stops(routes):
    stops = routes[0].get_next_stops()
    assert len(stops) == 4
    assert stops[0].depaturetime == datetime.datetime(2016, 6, 1, 10, 1, 0, 0)
    assert stops[0].name == "Hochschule Augsburg"

    assert stops[1].depaturetime == datetime.datetime(2016, 6, 1, 10, 3, 0, 0)
    assert stops[1].name == u'Augsburg Rotes Tor'
    assert stops[1].lat == "48.35933"
    assert stops[1].lng == "10.90258"

    walk_time = get_walking_time([stops[0].lat,stops[0].lng],[stops[1].lat,stops[1].lng])
    assert walk_time.seconds == 0


def test_find_startstations(test_time):
    start = [10.90529, 48.35882]  # fachhochschule Augsburg
    stations = find_startstations(start, "Augsburg Hbf", test_time)
    assert (len(stations) == 3)

    assert (stations[0].name == u'Hochschule Augsburg')
    assert (stations[0].depaturetime == datetime.datetime(2016, 6, 1, 10, 1, 0, 0))


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
test_find_startstations(test_time)
#test_get_optimized_routes(test_time)
test_get_routes(test_time)
test_make_binary(test_time)
test_load_binary()

