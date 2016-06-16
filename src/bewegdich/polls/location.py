# -*- coding: utf-8 -*-
from views import *
from models import Coord


class Location(object):
    """
        get user position
        get destination position
        calculate fastest route from start to destination
        filter start station, final stop (direction) and departure times of route
        get next (e.g. 5) stops in driving direction
        get departure times for these stops
        calculate walking time between user position and these stops
        compare walking time and departure times
        go over these stops:
            if current time + walking time < departure time
               set this stop as starting point

       # Returns the best Route
    """

    def __init__(self, session):
        # Saves the session object of one user
        self.session = session

    def get_location(self):
        if LOCATION in request.session:
            return request.session[LOCATION]

        position = self.get_ip_location(ip)

        self.set_location(position)

        return position

    def set_location(self, position):
        request.session[LOCATION] = position

    def get_ip_location(self, ip):
        """
        Looks up the location of the given IP-adress and returns the coords
        :param ip: as string
        :return: Coord-object
        """
        if = request.META["REMOTE_ADDR"]

        if ip.count(".") != 3:
            print("Error: Not a valid IP-Adress (" + ip + ")")

        xml = self.get_xml("http://freegeoip.net/xml/" + ip)
        if len(xml) < 9:
            print("Error: IP-Location could not be found (" + ip + ")")
            return Coord(0, 0)
        return Coord(xml[8].text, xml[9].text)
