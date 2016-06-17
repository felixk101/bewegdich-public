import unittest
import sys
sys.path.append("src/bewegdich")
from bewegdich import settings
from polls.controller import Controller
import datetime
from polls.route import Stop
from polls.models import Coord
import os

#Set the Testdatabase
settings.DATABASES ={
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': os.path.join(settings.BASE_DIR, 'db.sqlite3'),
        }
    }

class TestController(unittest.TestCase):
    """
        Testclass for Controllerfunctions

        ######################################
        The values are not correct right now!
        ######################################

    """


    def get_routes(self):
        c = Controller()
        dtime = datetime.datetime(2005, 7, 14, 12, 30)
        routes = c.get_routes([48.111,11.2343], 210100100, dtime)
        self.assertEqual(len(routes),5)
        self.assertEqual(routes[0].depature_time,datetime.datetime(2005, 7, 14, 15, 30))
        self.assertEqual(routes[0].origin_stop,Stop("hbf", 48.1111, 11.2222, isWalking=0))
        self.assertEqual(routes[0].destination_stop,Stop("FH", 48.1111, 11.2222, isWalking=0))



    def get_walking_Route(self):
        c = Controller()
        walkingroute = c.get_walking_Route([11.23424,41.12345], [11.31111, 41.23445])

        self.assertEqual(c.get_walking_time(walkingroute),datetime.timedelta(0, 1000))
        path = c.get_walking_coords(walkingroute)
        self.assertEqual(len(path),23)
        self.assertEqual(path[0],Coord(41,11))
        self.assertEqual(path[1].Coord(41,11))
        self.assertEqual(path[1].Coord(41,11))
        self.assertEqual(path[1].Coord(41,11))

        self.assertEqual(path[10],Coord(41, 11))
        self.assertEqual(path[20].Coord(41, 11))
        self.assertEqual(path[21].Coord(41, 11))
        self.assertEqual(path[30].Coord(41, 11))

        walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        self.assertEqual(len(c.get_walking_coords(walkingroute)),45)

        walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        self.assertEqual(len(c.get_walking_coords(walkingroute)), 45)

        walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])
        self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        self.assertEqual(len(c.get_walking_coords(walkingroute)), 45)

        walkingroute = c.get_walking_Route([11.23424, 41.12345], [11.31111, 41.23445])

        self.assertEqual(c.get_walking_time(walkingroute), datetime.timedelta(0, 1000))
        path = c.get_walking_coords(walkingroute)
        self.assertEqual(len(path), 23)
        self.assertEqual(path[0], Coord(41, 11))
        self.assertEqual(path[1].Coord(41, 11))
        self.assertEqual(path[1].Coord(41, 11))
        self.assertEqual(path[1].Coord(41, 11))

        self.assertEqual(path[10], Coord(41, 11))
        self.assertEqual(path[20].Coord(41, 11))
        self.assertEqual(path[21].Coord(41, 11))
        self.assertEqual(path[30].Coord(41, 11))

    def test_get_stoplist(self):
        c = Controller({})
        coords = [10.89, 48.37]

        result = c.get_stoplist("hbf", coords)
        self.assertEqual(result[0].value,"Augsburg, Augsburg Hauptbahnhof")
        self.assertEqual(result[0].data,"21000101")
        self.assertEqual(result[1].value, "hauptbahnhof")
        self.assertEqual(result[1].data, "21000101")

        result = c.get_stoplist("hauptbahnhof", coords)
        self.assertEqual(result[0].value, "hauptbahnhof")
        self.assertEqual(result[0].data, "21000101")
        self.assertEqual(result[1].value, "hauptbahnhof")
        self.assertEqual(result[1].data, "21000101")

        result = c.get_stoplist("koenigspla", coords)
        self.assertEqual(result[0].value, "hauptbahnhof")
        self.assertEqual(result[0].data, "21000101")
        self.assertEqual(result[1].value, "hauptbahnhof")
        self.assertEqual(result[1].data, "21000101")

        result = c.get_stoplist("koenigsplatz", coords)
        self.assertEqual(result[0].value, "hauptbahnhof")
        self.assertEqual(result[0].data, "21000101")
        self.assertEqual(result[1].value, "hauptbahnhof")
        self.assertEqual(result[1].data, "21000101")

        result = c.get_stoplist("rotes", coords)
        self.assertEqual(result[0].value, "hauptbahnhof")
        self.assertEqual(result[0].data, "21000101")
        self.assertEqual(result[1].value, "hauptbahnhof")
        self.assertEqual(result[1].data, "21000101")

if __name__ == '__main__':
    unittest.main()