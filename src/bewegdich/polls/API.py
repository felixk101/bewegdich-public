import json
import math
import urllib as urllib1
import urllib2 as urllib
from collections import namedtuple
from xml.etree import ElementTree as ET
import datetime



def get_json(url):
    """
    Downloads the json from the given URL and converts it into a json object
    :param url: the url
    :return: a json
    """
    response = urllib.urlopen(url, timeout=10)
    return json.loads(response.read())


def get_xml(url):
    """
    Downloads the XML from the given URL and converts it into a tree object
    :param url: the url
    :return: a treeobject
    """
    response = urllib1.urlopen(url)
    string = response.read()
    return ET.fromstring(string)


def get_walking_Route(origin, destination):
    """
    Searches for a route to walk from A to B
    :param origin: startposition [lng,lat]
    :param destination: destination [lng,lat]
    :return: a xml treeobject
    """
    if type(origin) != list or type(destination) != list:
        return -1

    param = {
        'start': str(origin[0]) + "," + str(origin[1]),
        'end': str(destination[0]) + "," + str(destination[1]),
        'via': '',
        'lang': 'de',
        'distunit': 'KM',
        'routepref': 'Pedestrian',
        'weighting': 'Shortest',
        'avoidAreas': '',
        'useTMC': 'false',
        'noMotorways': 'false',
        'noTollways': 'false',
        'noUnpavedroads': 'false',
        'noSteps': 'false',
        'noFerries': 'false',
        'instructions': 'false'
    }
    url = "http://www.openrouteservice.org/route?" + urllib1.urlencode(param)
    data = get_xml(url)
    return data


def get_matching_stations(place, coords):
    """
        Searches for the closes matching stops with the same name as the given one.
    :param place: the first few letters of the desired stop
    :param coords: [longitude,latitude]
    :return: a json with a list of stops
    """
    param = {
        'outputFormat': 'JSON',
        'locationServerActive': 0,
        'coordOutputFormat': 'WGS84[DD.ddddd]',
        # 'type_origin': 'coord',
        # 'name_origin': (str(coords[0]) + ":" + str(coords[1]) + ":WGS84"),
        'type_sf': 'stop',
        # 'type_sf': 'any', # May makes sense (Destination is an address)
        'name_sf': place
    }
    cityurl = getCityUrl(coords[0], coords[1])
    if cityurl is '':
        return []
    url = cityurl + "XML_STOPFINDER_REQUEST?" + urllib1.urlencode(param)
    return get_json(url)


def distance(lon1, lat1, lon2, lat2):
    """
       Determines the distance for two sets of lon and lat
       :return: distance in meters
       """
    r = 6378.137  # Radius of earth in km
    dLat = (lat2 - lat1) * math.pi / 180
    dLon = (lon2 - lon1) * math.pi / 180
    a = math.sin(dLat / 2) * math.sin(dLat / 2) + \
        + math.cos(lat1 * math.pi / 180) * math.cos(lat2 * math.pi / 180) \
        * math.sin(dLon / 2) * math.sin(dLon / 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    d = r * c
    return d * 1000  # meters


def closestCity(longitude, latitude):
    """

    Determines the closest city for a given latitude and longitude
    using a list of the supported cities

    :return: the city as a string
    """
    ##longitude, latitude
    City = namedtuple('blubb', ['cityname', 'long', 'lat'])
    cities = [
        City('Augsburg', 10.890779, 48.3705449),
        City('Basel', 7.58769, 47.55814)
    ]

    min_radius = 15000  # 15 km
    for city in cities:
        dist = distance(city.long, city.lat, float(longitude), float(latitude))
        if dist < min_radius:
            return city.cityname
    print "Error: no city was found in reach"
    # throw error here
    return ''


def getCityUrl(longitude, latitude):
    """
    Returns the city url

    :rtype: Route
    :param longitude: Longitude
    :param latitude: Latitude
    :return: City url
    """
    city = closestCity(longitude, latitude)

    if city == 'Augsburg':
        return "https://efa.avv-augsburg.de/avv/"
    elif city == 'Basel':
        return "http://www.efa-bvb.ch/bvb/"

    return ''


def get_efa_routes(start, dest, dtime=-1):
    """
        Finds the routes from A to B directly from EFA

    :param start: the startposition
    :param dest:  the destination
    :param dtime:  the destination time
    :return: the json with a list of routes
    """

    lat, lon = start[1], start[0]
    if dtime == -1:
        dtime = datetime.datetime.now()

    param = {
        'outputFormat': 'JSON',
        'locationServerActive': 0,
        'coordOutputFormat': 'WGS84[DD.ddddd]',
        'type_origin': 'coord',
        'name_origin': (str(lon) + ":" + str(lat) + ":WGS84"),
        'type_destination': 'stopID',
        'name_destination': dest
    }

    if datetime != -1:
        param.update({
            'itdDate': dtime.date().strftime("%Y%m%d"),
            'itdTime': dtime.time().strftime("%H:%M"),
            'itdTripDateTimeDepArr': 'dep'
        })

    url = getCityUrl(lon, lat) + "XML_TRIP_REQUEST2?" + urllib1.urlencode(param)
    return get_json(url)