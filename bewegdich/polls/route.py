from datetime import datetime
# coding: utf8



class Route(object):
    """
    Route is the main object which is filled with data by the EFA API. The json files is given in the contructor and
    will be analysed to filter the important data.
    """
    data = []
    origin_stop = ""
    destination_stop = ""
    depature_time = 0
    path = []

    def __init__(self, json):
        self.data = json

        pathlength = self.data["legs"][0]["points"].__len__()
        for index in range(pathlength):
            point = self.data["legs"][0]["points"][index]
            self.path.append(Stop(point))

        self.origin_stop = self.path[0]
        self.destination_stop = self.path[-1]
        self.depature_time = self.origin_stop.depaturetime


    def __str__(self):
        return self.origin_stop.__str__() + " -> " + self.destination_stop.__str__()

    def get_next_stops(self, number_of_stops=5):
        """
        Searches for the next stops in the route excluding the originstop

        :return: the stops
        """
        linelist = []
        for stop in self.data["legs"][0]["stopSeq"]:
            linelist.append(Stop(stop))
        # Remove first and last item because its the originstop and destination stop
        linelist.pop(0)
        linelist.pop(linelist.__len__() - 1)
        return linelist



class Stop(object):
    """

    This Object represents one location with name and coords.
    Its fed with json-data and filters the important informations

    """
    data = ""
    name = ""
    lat = 0
    lng = 0
    depaturetime = 0

    def __init__(self, json):
        self.data = json
        self.name = json["name"]
        coords = json["ref"]["coords"].split(",")
        self.lat = coords[0]
        self.lng = coords[1]
        if "dateTime" in json:
            self.depaturetime = formatDateTime(json["dateTime"])
        elif "depDateTime" in json["ref"]:
            self.depaturetime = formatDateTime(json["ref"]["depDateTime"])

    def __str__(self):
        return self.name.encode('utf-8') + " " + self.depaturetime.time().__str__() + self.lat + " : " + self.lng

def formatDateTime(abfahrszeit):
    """

    Formats the time from a json-string to a python datetime object

    :param abfahrszeit: e.g. 27.04.2016 13:45 or 20160529 15:11
    :return: the datetime object
    """
    if type(abfahrszeit) == dict:
        return datetime.strptime(abfahrszeit["date"] + " " + abfahrszeit["time"], '%d.%m.%Y %H:%M')
    else:
        return datetime.strptime(abfahrszeit , '%Y%m%d %H:%M')
