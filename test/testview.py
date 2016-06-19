# -*- coding: utf-8 -*-
import unittest
import sys
import json
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

import django
django.setup()



class TestController(unittest.TestCase):
    """
        Testclass for Controllerfunctions

    """

    def test_index(self):
        c = Client()
        response = c.get('/')
        self.assertEqual(response.status_code, 200)

    def test_API_stoplist(self):
        c = Client()
        response = c.get('/api/stoplist/?query=hbf&latitude=48.35882&longitude=10.90529')
        self.assertEqual(response.status_code,200)
        self.assertRaises(Exception, json.loads(response.content))
        data = json.loads(response.content)
        self.assertTrue("suggestions" in data)
        self.assertTrue(len(data["suggestions"]), 3)
        self.assertEqual(data["suggestions"][0]["value"],u'Augsburg, Augsburg Hauptbahnhof')
        self.assertEqual(data["suggestions"][0]["data"],u'2000100')


    def test_API_stoplist(self):
        c = Client()
        response = c.get('/api/getWalkingPath/?originlat=48.1234&originlng=11.2034&destlat=48.4532&destlng=11.4563')
        self.assertEqual(response.status_code, 200)
        self.assertRaises(Exception, json.loads(response.content))
        data = json.loads(response.content)
        self.assertTrue("path" in data)
        self.assertTrue(len(data), 5)
        self.assertTrue(len(data["path"]), 886)




if __name__ == '__main__':


    unittest.main()