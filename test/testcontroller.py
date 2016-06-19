# -*- coding: utf-8 -*-
import unittest
import sys


from polls.API import get_walking_Route
from polls.variables import SPEED
from bewegdich import settings
from polls.controller import Controller
from datetime import datetime as dt
from datetime import timedelta as td
from polls.route import Stop
from polls.models import Coord,efaStop
from django.test import Client
import os


sys.path.append("src/bewegdich/")

#Set the Testdatabase
settings.DATABASES ={
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(settings.BASE_DIR, 'db.sqlite3'),
        }
    }
#  A dic with the name of the station and the stopid fo easier testing
stops = {"hbf":2000100,"fh":2000768, "Brandweg":2000531}


class TestController(unittest.TestCase):
    """
        Testclass for Controllerfunctions

    """

    def test_find_best_startstations(self):
        print("test_find_best_startstations")
        c = Controller({SPEED: 1.0})

        dtime = dt(2016, 7, 14, 12, 30)
        result = c.find_startstations([10.81516, 48.313476],  stops["Brandweg"],dtime)
        print(result)

        self.assertEqual(result[0],
        Stop(u'Bergheim Baggersee', u'48.32372', u'10.83283',stopid=u'2000005',
             walkingtime=td(minutes=24), depaturetime=dt(2016,07,14,13,35),isWalking=0))

        self.assertEqual(result[1],
        Stop(u'Bergheim Baggersee', u'48.32372', u'10.83283', stopid=u'2000005',
            walkingtime=td(minutes=24), depaturetime=dt(2016, 07, 14, 13, 5), isWalking=0))

        self.assertEqual(result[2],
        Stop(u'Bergheim Baggersee', u'48.32372', u'10.83283', stopid=u'2000005',
            walkingtime=td(minutes=24), depaturetime=dt(2016, 07, 14, 14, 5), isWalking=0))

        c = Controller({SPEED: 2.0})
        dtime = dt(2016, 7, 14, 12, 30)
        result = c.find_startstations([10.81516, 48.313476], stops["Brandweg"], dtime)
        print(result)

        self.assertEqual(result[0],
                         Stop(u'Bergheim Baggersee', u'48.32372', u'10.83283', stopid=u'2000005',
                              walkingtime=td(minutes=12), depaturetime=dt(2016, 07, 14, 13, 35), isWalking=0))

        self.assertEqual(result[1],
                         Stop(u'Bergheim Baggersee', u'48.32372', u'10.83283', stopid=u'2000005',
                              walkingtime=td(minutes=12), depaturetime=dt(2016, 07, 14, 13, 5), isWalking=0))

        self.assertEqual(result[2],
                         Stop(u'Bergheim Baggersee', u'48.32372', u'10.83283', stopid=u'2000005',
                              walkingtime=td(minutes=12), depaturetime=dt(2016, 07, 14, 14, 5), isWalking=0))

    def test_get_routes(self):
        print("test_get_routes")
        c = Controller({})
        dtime = dt(2016, 7, 14, 12, 30)

        routes = c.get_routes([10.81516, 48.313476], stops["Brandweg"], dtime)
        self.assertEqual(len(routes), 3)
        self.assertEqual(routes[0].depature_time, dt(2016, 7, 14, 13, 00))
        self.assertEqual(routes[0].destination_stop, Stop(u'Göggingen Brandweg', u'48.33248', u'10.84903', isWalking=0))
        self.assertEqual(routes[0].origin_stop, Stop(u'Bergheim', u'48.31388', u'10.81676', isWalking=0))
        self.assertEqual(routes[2].line[0], u'Stadtbus 38')
        self.assertEqual(routes[2].duration,td(minutes=11))
        self.assertEqual(routes[1].origin_stop.depaturetime, dt(2016, 7, 14, 13, 30))
        self.assertEqual(routes[1].path[3],Stop(u'Bergheim Nord',u'48.31939',u'10.82149',isWalking=0))

        routes = c.get_routes([10.891231, 48.37123], stops["hbf"], dtime)
        self.assertEqual(len(routes),4)
        self.assertEqual(routes[0].depature_time,dt(2016, 7, 14, 12, 32))
        self.assertEqual(routes[0].origin_stop,Stop(u'Augsburg Klinkertor', u'48.37136', u'10.88963', isWalking=0))
        self.assertEqual(routes[0].destination_stop,Stop(u'Augsburg Hbf', u'48.36592',u'10.88798', isWalking=0))
        self.assertEqual(len(routes[3].path),2)

    def test_get_walking_Route(self):
        print("test_get_walking_Route")
        c = Controller({SPEED:1.0})
        walkingroute = get_walking_Route([10.81516, 48.313476], [10.821083,48.317614])

        self.assertEqual(c.get_walking_time(walkingroute),td(0, 537))
        path = c.get_walking_coords(walkingroute)
        self.assertEqual(len(path),24)
        self.assertEqual(path[0],Coord('48.3135654','10.8151087'))
        self.assertEqual(path[1],Coord('48.3138378','10.8161701'))
        self.assertEqual(path[10],Coord('48.3148491', '10.8190032'))
        self.assertEqual(path[20],Coord('48.3170408', '10.8204259'))

        c = Controller({SPEED: 2.0})
        walkingroute = get_walking_Route([10.81516, 48.313476], [10.821083, 48.317614])

        self.assertEqual(c.get_walking_time(walkingroute), td(0, 268))
        path = c.get_walking_coords(walkingroute)
        self.assertEqual(len(path), 24)
        self.assertEqual(path[0], Coord('48.3135654', '10.8151087'))
        self.assertEqual(path[1], Coord('48.3138378', '10.8161701'))
        self.assertEqual(path[10], Coord('48.3148491', '10.8190032'))
        self.assertEqual(path[20], Coord('48.3170408', '10.8204259'))

        # walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        # self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        # self.assertEqual(len(c.get_walking_coords(walkingroute)),45)
        #
        # walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        # self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        # self.assertEqual(len(c.get_walking_coords(walkingroute)), 45)
        #
        # walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        # self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        # self.assertEqual(len(c.get_walking_coords(walkingroute)), 45)
        #
        # walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        #
        # self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        # path = c.get_walking_coords(walkingroute)
        # self.assertEqual(len(path), 23)
        # self.assertEqual(path[0], Coord(41, 11))
        # self.assertEqual(path[1].Coord(41, 11))
        # self.assertEqual(path[1].Coord(41, 11))
        # self.assertEqual(path[1].Coord(41, 11))
        #
        # self.assertEqual(path[10], Coord(41, 11))
        # self.assertEqual(path[20].Coord(41, 11))
        # self.assertEqual(path[21].Coord(41, 11))
        # self.assertEqual(path[30].Coord(41, 11))

    def test_get_stoplist(self):
        c = Controller({})
        coords = [10.89, 48.37]

        result = c.get_stoplist("hbf", coords)
        self.assertEqual(result[0],efaStop(u'2000100',u'Augsburg, Augsburg Hauptbahnhof',9761000))
        self.assertEqual(result[1],efaStop(u'2008000',u'München, München Hauptbahnhof',9162000))

        result = c.get_stoplist("hauptbahnhof", coords)
        self.assertEqual(result[0], efaStop(u'2000100', u'Augsburg, Augsburg Hauptbahnhof', 9761000))
        self.assertEqual(result[1], efaStop(u'2008000', u'München, München Hauptbahnhof', 9162000))

        result = c.get_stoplist("koenigspla", coords)
        self.assertEqual(result[0],efaStop(u'2000101',u'Augsburg, Königsplatz',9761000))
        self.assertEqual(len(result),1)

        result = c.get_stoplist("koenigsplatz", coords)
        self.assertEqual(result[0], efaStop(u'2000101', u'Augsburg, Königsplatz', 9761000))
        self.assertEqual(len(result), 1)

        result = c.get_stoplist("rotes", coords)
        self.assertEqual(result[0],efaStop(u'2000111',u'Augsburg, Augsburg Protestantischer Friedhof',9761000))
        self.assertEqual(len(result), 2)

        result = c.get_stoplist("rotes Tor", coords)
        self.assertEqual(result[0], efaStop(u'2000116',u'Augsburg, Rotes Tor', 9761000))
        self.assertEqual(len(result), 1)


if __name__ == '__main__':

    unittest.main()