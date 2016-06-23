# -*- coding: utf-8 -*-
import unittest
import sys
import json
from bewegdich import settings
from django.test import Client
import os

sys.path.append("src/bewegdich/")

# Set the Testdatabase
settings.DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(settings.BASE_DIR, 'db.sqlite3'),
    }
}
#  A dic with the name of the station and the stopid fo easier testing
stops = {"hbf": 2000100, "fh": 2000768, "Brandweg": 2000531}

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
        self.assertEqual(response.status_code, 200)
        self.assertRaises(Exception, json.loads(response.content))
        data = json.loads(response.content)
        self.assertTrue("suggestions" in data)
        self.assertTrue(len(data["suggestions"]), 3)
        self.assertEqual(data["suggestions"][0]["value"], u'Augsburg, Augsburg Hauptbahnhof')
        self.assertEqual(data["suggestions"][0]["data"], u'2000100')

    def test_API_getWalkingPath(self):
        c = Client()
        response = c.get('/api/walkingpath/?originLatitude=48.1234&originLongitude=11.2034&destinationLatitude=48.4532&destinationLongitude=11.4563')
        self.assertEqual(response.status_code, 200)
        self.assertRaises(Exception, json.loads(response.content))
        data = json.loads(response.content)
        self.assertTrue("path" in data)
        self.assertTrue(len(data), 5)
        self.assertTrue(len(data["path"]), 888)

    def test_API_getRoute(self):
        c = Client()
        response = c.get('/api/route/?latitude=48.35882&longitude=10.90529&stopid=2000100')
        self.assertEqual(response.status_code, 200)
        self.assertRaises(Exception, json.loads(response.content))
        data = json.loads(response.content)
        self.assertTrue("data" in data)
        self.assertTrue(len(data), 4)
        self.assertEqual(len(data["data"]["routes"]), 3)


if __name__ == '__main__':
    unittest.main()
