# -*- coding: utf-8 -*-
import unittest
import sys


from polls.API import *
from bewegdich import settings
from polls.variables import SPEED
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


class TestAPI(unittest.TestCase):
    """
        Testclass for API functions

    """

    def test_get_json(self):
        print("test_get_json")
        #test stopfinderrequest
        url="https://efa.avv-augsburg.de/avv/XML_STOPFINDER_REQUEST?coordOutputFormat=WGS84%5BDD.ddddd%5D&outputFormat=JSON&type_sf=stop&name_sf=Haup&locationServerActive=0"
        returnvalue = get_json(url)
        assert isinstance(returnvalue, dict)
        self.assertEqual(returnvalue["stopFinder"]["input"]["input"],"Haup")

        #test xmltriprequest
        url="https://efa.avv-augsburg.de/avv/XML_TRIP_REQUEST2?itdTime=10%3A02&outputFormat=JSON&itdTripDateTimeDepArr=dep&itdDate=20160620&name_origin=10.894030400000002%3A48.3548687%3AWGS84&locationServerActive=0&coordOutputFormat=WGS84%5BDD.ddddd%5D&name_destination=2001110&type_origin=coord&type_destination=stopID"

    def test_xml(self):
        pass

    def test_get_walking_Route(self):
        pass

    def test_get_NumberUntilChar(self):
        pass

    def test_get_matching_stations(self):
        pass

    def test_distance(self):
        pass

    def test_closestCity(self):
        pass

    def test_getCityUrl(self):
        pass

    def test_get_efa_routes(self):
        pass

    def test_replace_coordlist(self):
        pass

    def test_find_sublist(self):
        pass


if __name__ == '__main__':

    unittest.main()