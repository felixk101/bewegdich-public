from datetime import datetime as dt
import datetime
# coding: utf8



class Route(object):
    """
    Route is the main object which is filled with data by the EFA API. The json files is given in the contructor and
    will be analysed to filter the important data.
    """
    data = []
    id = -1
    origin_stop = ""
    destination_stop = ""
    depature_time = 0
    duration = datetime.timedelta()
    path = []
    line = []

    def __init__(self, json):
        self.data = json
        self.path = []
        self.line = []
        for linestops in self.data["legs"]:
            if "stopSeq" not in linestops or linestops["mode"]["product"] == "Fussweg":
                pass
            else:
<<<<<<< HEAD
                # print("ROUTE: append " + linestops["mode"]["product"] + " " + linestops["mode"]["number"])
                self.line.append(linestops["mode"]["product"] + " " + self.data["legs"][0]["mode"]["number"])
=======
                # print("ROUTE: append " + self.data["legs"][1]["mode"]["product"] + " " + self.data["legs"][1]["mode"]["number"])
                self.line.append(linestops["mode"]["product"] + " " + linestops["mode"]["number"])
>>>>>>> c041e809cc33d5e804c18780c7e24634f42e474f
                for stop in linestops["stopSeq"]:
                    self.path.append(Stop.make_from_json(stop))

        arr = self.data["duration"].split(":")
        self.duration = datetime.timedelta(hours=int(arr[0]), minutes=int(arr[1]))
       # self.duration = datetime.strptime(self.data["duration"], '%H:%M').time()

        if(len(self.path) == 0):
            return
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

        for linestops in self.data["legs"]:
            if linestops["mode"]["product"] != "Fussweg":
                for stop in linestops["stopSeq"]:
                    linelist.append(Stop.make_from_json(stop))



        #when No stations inbetween start and destination found
        if(linelist.__len__()<2):
            return []

        # Remove last item because its the destination stop
        linelist.pop(linelist.__len__() - 1)
        return linelist

    def isWalkOnly(self):
       iswalkonly = 1
       for linestops in self.data["legs"]:
           if linestops["mode"]["product"] != "Fussweg":
               iswalkonly = 0
       return iswalkonly

    def get_duration(self):
        return str(self.duration)

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
    walkingtime = datetime.timedelta(0, 0)

    def __init__(self,name,lat,lng, isWalking=0):
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
        stop = Stop(name,lat,lng)
        stop.data = data
        if "dateTime" in json:
            stop.depaturetime = formatDateTime(json["dateTime"])
        elif "depDateTime" in json["ref"]:
            stop.depaturetime = formatDateTime(json["ref"]["depDateTime"])
        return stop

    def get_coords(self):
        return [self.lng,self.lat]

    def __str__(self):
        if(self.depaturetime == 0): # If its the destination there is no depaturetime
            return self.name
        else:
            return self.name + " " + self.depaturetime.time().__str__()


def formatDateTime(abfahrszeit):
    """

    Formats the time from a json-string to a python datetime object

    :param abfahrszeit: e.g. 27.04.2016 13:45 or 20160529 15:11
    :return: the datetime object
    """
    time = -1
    if type(abfahrszeit) == dict:
        time = dt.strptime(abfahrszeit["date"] + " " + abfahrszeit["time"], '%d.%m.%Y %H:%M')
    else:
        time = dt.strptime(abfahrszeit , '%Y%m%d %H:%M')

    if (type(time) == int):
        print("WRONG WRONG")
    return time
