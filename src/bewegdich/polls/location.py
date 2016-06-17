# -*- coding: utf-8 -*-
from views import *
from models import Coord
from variables import LOCATION
from polls.API import get_xml


def get_location(request):
    if LOCATION not in request.session:
        if "127.0.0.1" == request.META["REMOTE_ADDR"]:
            set_location(request,Coord(48,11))
        else:
            position = get_ip_location(request.META["REMOTE_ADDR"])
            set_location(request,position)

    # return request.session[LOCATION]
    return Coord(48,11)

def set_location(request, position):
    #
    request.session[LOCATION] = [position.latitude,position.longitude]

def get_ip_location(ip):
    """
    Looks up the location of the given IP-adress and returns the coords
    :param ip: as string
    :return: Coord-object
    """
    if ip.count(".") != 3:
        print("Error: Not a valid IP-Adress (" + ip + ")")
        return Coord(0, 0)
    xml = get_xml("http://freegeoip.net/xml/" + ip)
    if len(xml) < 9:
        print("Error: IP-Location could not be found (" + ip + ")")
        return Coord(0, 0)
    return Coord(xml[8].text, xml[9].text)
