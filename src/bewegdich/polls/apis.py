import json
import math
import urllib as urllib1
import urllib2 as urllib
from collections import namedtuple
from xml.etree import ElementTree as ET
import datetime

from polls.models import Coord
from polls.variables import FH_LONGWAY2, FH_LONGWAY1


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
    return get_walking_Route_OSRM(origin, destination)



def get_walking_Route_ORS(origin, destination):
    """
    ### This functions need to stay in here for running the app on local machines ###

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

    # Get the coords out of the xml
    coords = []
    for waypoint in data[1][0][1][0]:
        arr = waypoint.text.split(" ")
        coords.append(Coord(arr[1], arr[0]))
    shortcut = []
    coords = replace_coordlist(coords, FH_LONGWAY1, [])
    coords = replace_coordlist(coords, FH_LONGWAY2, shortcut)

    # Get the time out of the xml
    duration = data[1][0][0][0].text
    time = -1
    secondsonly = 0

    try:
        # e.g. PT    15M
        #     PT    37M 49S
        #     PT 9H 43M 57S
        dic = {"S": 1, "M": 60, "H": 3600}
        index = getNumberUntilChar(duration)
        while duration[-1] is not "T":
            secondsonly += int(duration[index:-1]) * dic[duration[-1]]
            duration = duration[:index]
            index = getNumberUntilChar(duration)

    except:
        print("Error: time could not be converted: " + duration)
        secondsonly = 0

    #This is a manual fix because the orignal route was way to long and took to much time
    if find_sublist(coords, FH_LONGWAY1) >= 0:
        secondsonly -= 100
    if find_sublist(coords, FH_LONGWAY2) >= 0:
        secondsonly -= 150
    dic = {"walkingtime": secondsonly, "coords": coords}
    return dic

def get_walking_Route_OSRM(origin, destination):
    """
    Searches for a route to walk from A to B
    :param origin: startposition [lng,lat]
    :param destination: destination [lng,lat]
    :return: a xml treeobject
    """
    if type(origin) != list or type(destination) != list:
        return -1

    city = closestCity(origin[0], origin[1])
    if city == 'Augsburg':
        url = 'http://localhost:5000'
    elif city == 'Basel':
        url = 'http://localhost:5001'
    else:
        return {"walkingtime": 0, "coords": []}

    param = {
        'geometries': 'geojson'
    }
    origin = str(origin[0]) + "," + str(origin[1])
    destination = str(destination[0]) + "," + str(destination[1])
    url += "/route/v1/walking/" + urllib.quote(
        origin + ";" + destination) + "?" + urllib1.urlencode(param)
    data = get_json(url)

    # Get the coords out of the xml
    coords = []

    for coordinate in data["routes"][0]["geometry"]["coordinates"]:
        coords.append(Coord(coordinate[1], coordinate[0]))

    dic = {"walkingtime": data["routes"][0]["duration"], "coords": coords}
    return dic


def getNumberUntilChar(text):
    """
        Seaches for a numberchars until a non-numberchar will be found.
        Then the index of the numbe after the char will be returned.

    :param text: to search through
    :return: the index of the beginning of the number
    """
    index = len(text) - 2
    while True:
        test = text[index]
        if not is_number(test):
            break
        else:
            index -= 1
    return index + 1


def is_number(s):
    try:
        int(s)
        return True
    except ValueError:
        pass
    return False


def get_matching_stations(place, coords):
    """
        Searches for the closes matching stops with the same name as the given one.
    :param place: the first few letters of the desired stop
    :param coords: [longitude,latitude]
    :return: a json with a list of stops
    """
    cityurl = getCityUrl(coords[0], coords[1])
    if cityurl is '':
        return []

    cityname = closestCity(coords[0], coords[1])

    if cityname == 'Augsburg':
         param = {
            'outputFormat': 'JSON',
            'locationServerActive': 0,
            'coordOutputFormat': 'WGS84[DD.ddddd]',
            # 'type_origin': 'coord',
            # 'name_origin': (str(coords[0]) + ":" + str(coords[1]) + ":WGS84"),
            'type_sf': 'stop',
            'anyMaxSizeHitList': 50,
            # 'type_sf': 'any', # May makes sense (Destination is an address)
            'name_sf': place
        }
    else:
        param = {
            'outputFormat': 'JSON',
            'locationServerActive': 1,
            'coordOutputFormat': 'WGS84[DD.ddddd]',
            'useLocalityMainStop':'true',
            'doNotSearchForStops_sf':1,
            'SpEncId':0,
            'stateless':1,
            'anyObjFilter_sf':2,
            'anyMaxSizeHitList':50,
            # 'type_origin': 'coord',
            # 'name_origin': (str(coords[0]) + ":" + str(coords[1]) + ":WGS84"),
            'type_sf': 'any',
            'prMinQu':1,
            'w_regPrefAl':2,
            # 'type_sf': 'any', # May makes sense (Destination is an address)
            'name_sf': place
        }

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

    min_radius = 200000  # 15 km
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
        return 'https://efa.avv-augsburg.de/avv/'
    elif city == 'Basel':
        return 'http://www.efa-bw.de/bvb/'

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


def replace_coordlist(list, sublist, replacelist):
    """
        It searches for a given sublist in the list and if found replaces it with the replacelist
    :param list: a list of coords-objects
    :param sublist:  the sublist which should be in the list
    :param replacelist: the replacement of the sublist
    :return: the new list
    """
    index = find_sublist(list, sublist)

    if index >= 0:
        return list[0:index - 1] + replacelist + list[index + len(sublist):]
    else:
        return list


def find_sublist(list, sublist):
    """
    Searches for a sublist in a list and resturns the index where sublist starts in the list

    :param list:
    :param sublist:
    :return: index if the list was found or -1 if not
    """
    for i in range(0, len(list) - len(sublist)):
        for j in range(0, len(sublist)):
            if not sublist[j].__eq__(list[i]):
                break;
            else:
                if j == 0:
                    startindex = i
                i = i + 1
                if j + 1 == len(sublist):
                    found = True
                    return startindex
    return -1


def fix_wrong_coords(coord):
    if float(coord) < 0:
        return str(360 + float(coord))
    else:
        return coord
