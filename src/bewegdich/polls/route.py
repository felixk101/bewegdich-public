# -*- coding: utf-8 -*-
import datetime

class Route(object):
    """
    Route is the main object which is filled with data by the EFA API. The json files is given in the contructor and
    will be analysed to filter the important data.
    """
    # the hole raw JSON-String
    data = []

    # the id which identifies this route only in this session. This number will be set later in the process
    id = -1

    # The first station the vehicle(Bus/Train) start.
    origin_stop = ""

    # The destination the user wants to go
    destination_stop = ""

    # The time the user has to start walking to catch the vehicle(Bus/Train).
    # This time will be calculated later in the process
    depature_time = 0

    # The duration the hole route including the walk takes. This duration will be calculated later in the process
    duration = datetime.timedelta(0,0)

    # the part of the hole route where you ride by bus/train, a list of stops
    path = []

    # The different names of the bus/train e.g. bus 101
    line = []

    # The part of the hole route where you walk, a list with coords
    walkingPath = []

    def __init__(self, json):
        self.data = json
        self.path = []
        self.line = []

        #Find out each Stop of the route and the vehiclenames e.g. Bus 102
        #Filter routes which are only one long footwalk
        for linestops in self.data["legs"]:
            if "stopSeq" not in linestops or linestops["mode"]["product"] == "Fussweg":
                pass
            else:
                self.line.append(linestops["mode"]["product"] + " " + linestops["mode"]["number"])
                for stop in linestops["stopSeq"]:
                    self.path.append(Stop.make_from_json(stop))

        arr = self.data["duration"].split(":")
        self.duration = datetime.timedelta(hours=int(arr[0]), minutes=int(arr[1]))

        # If its only one long walk don't list this route
        if len(self.path) == 0:
            return

        self.origin_stop = self.path[0]
        self.destination_stop = self.path[-1]
        self.depature_time = self.origin_stop.depaturetime



    def __str__(self):
        return self.origin_stop.__str__() + " -> " + self.destination_stop.__str__()

    def get_next_stops(self):
        """
        Searches for the next stops in the route excluding the originstop

        :return: the stops
        """
        linelist = []

        for linestops in self.data["legs"]:
            if linestops["mode"]["product"] != "Fussweg":
                for stop in linestops["stopSeq"]:
                    linelist.append(Stop.make_from_json(stop))



        #when No stations inbetween start and destination found
        if linelist.__len__()<3:
            return []

        # Remove first and last item because its the originstop and destination stop
        linelist.pop(0)
        linelist.pop(linelist.__len__() - 1)
        return linelist

    def isWalkOnly(self):
       iswalkonly = 1
       for linestops in self.data["legs"]:
           if linestops["mode"]["product"] != "Fussweg":
               iswalkonly = 0
       return iswalkonly

class Stop(object):
    """

    This Object represents one location with name and coords.
    Its fed with json-data and filters the important informations

    """
    data = "" #The hole raw JSON-String
    name = ""
    lat = 0
    lng = 0
    depaturetime = 0 #Defines the time the spesific Vehicle(Bus/Train) leaves this stop; 0 when walk
    walkingtime = datetime.timedelta(0,0) #Defines the walking time from this Stop to the next one
    isWalking = 0
    stopid = -1

    def __init__(self, name, lat, lng, isWalking=0):
        """

        :param name: the name of the stop
        :param lat:  the latitude
        :param lng:  the longitude
        :param isWalking: 1 if you walk from this stop to the next one;
                          0 if you down walk
        """
        self.name = name
        self.lat = lat
        self.lng = lng
        self.isWalking = isWalking



    @staticmethod
    def make_from_json(json):
        """
        Factory method to create a Stop
        Its somehow very difficult to make 2 contructores handle both things

        :param json:
        :return:
        """
        data = json
        name = json["name"]
        coords = json["ref"]["coords"].split(",")
        lat = coords[1]
        lng = coords[0]
        stop = Stop(name, lat, lng)
        stop.data = data
        stop.stopid = json["ref"]["id"]

        if "dateTime" in json:
            stop.depaturetime = formatDateTime(json["dateTime"])
        elif "depDateTime" in json["ref"]:
            stop.depaturetime = formatDateTime(json["ref"]["depDateTime"])
        return stop

    def get_coords(self):
        return [self.lng,self.lat]

    def __str__(self):
        if self.depaturetime == 0: # If its the destination there is no depaturetime
            return self.name
        else:
            return self.name + " " + self.depaturetime.time().__str__()

    def __eq__(self, other):
        return (isinstance(other, self.__class__) and self.lng == other.lng
                and self.lat == other.lat
                and self.isWalking == other.isWalking
                and self.lng == other.lng
                and self.name == other.name
                )


def formatDateTime(departuretime):
    """

    Formats the time from a json-string to a python datetime object

    :param departuretime: e.g. 27.04.2016 13:45 or 20160529 15:11
    :return: the datetime object
    """
    time = -1
    if type(departuretime) == dict:
        time = datetime.datetime.strptime(departuretime["date"] + " " + departuretime["time"], '%d.%m.%Y %H:%M')
    else:
        time = datetime.datetime.strptime(departuretime, '%Y%m%d %H:%M')

    if type(time) == int:
        print("ERROR: Timeconversion gone wrong")
    return time
