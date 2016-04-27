from datetime import datetime
# coding: utf8

class Route(object):
    data = []
    origin_stop = ""
    destination_stop = ""
    depature_time = 0

    def __init__(self, json):
        self.data = json

        self.origin_stop = Stop(self.data["legs"][0]["points"][0])
        self.destination_stop = Stop(self.data["legs"][0]["points"][1])
        self.depature_time = self.data["legs"][0]["points"][0]["dateTime"]
        self.depature_time = formatDateTime(self.depature_time)

    def __str__(self):
        return self.origin_stop.__str__() + " -> " + self.destination_stop.__str__()

    def get_next_stops(self):

        linelist = []
        for stop in self.data["legs"][0]["stopSeq"]:
            linelist.append(Stop(stop))
        # Remove first and last item because its the originstop and destination stop
        linelist.pop(0)
        linelist.pop(linelist.__len__() - 1)
        return linelist


class Stop(object):
    data = ""
    name = ""
    depaturetime = 0

    def __init__(self, json):
        self.data = json
        self.name = json["name"]
        if "dateTime" in json:
            self.depaturetime = formatDateTime(json["dateTime"])
        elif "depDateTime" in json["ref"]:
            self.depaturetime = formatDateTime(json["ref"]["depDateTime"])



    def __str__(self):
        return self.name + " " + self.depaturetime.time().__str__()

def formatDateTime(abfahrszeit):
    if type(abfahrszeit) == dict:
        return datetime.strptime(abfahrszeit["date"] + " " + abfahrszeit["time"], '%d.%m.%Y %H:%M')
    else:
        return datetime.strptime(abfahrszeit , '%Y%m%d %H:%M')

