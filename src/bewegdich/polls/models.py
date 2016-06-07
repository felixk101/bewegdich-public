from __future__ import unicode_literals
import datetime

from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible
from django.db import models


class User(models.Model):
    # id will be generated automatically
    uname = models.CharField(max_length=30)
    mail = models.CharField(max_length=100)
    pw = models.CharField(max_length=50)

    def __str__(self):
        return self.uname


class Usermeta(models.Model):
    # id will be generated automatically
    userid = models.ForeignKey(User, on_delete=models.CASCADE)
    key = models.CharField(max_length=50)
    value = models.CharField(max_length=50)

    def __str__(self):
        return self.userid + " " + self.key;


# class Stop(models.Model):
#     name = models.CharField(max_length=100)
#     lat = models.CharField(max_length=10)
#     lng = models.CharField(max_length=10)
#     depaturetime = models.DateTimeField('depature')
#     walkingtime = models.IntegerField('walkingtime')


# class Route(models.Model):
#     """
#     Route is the main object which is filled with data by the EFA API. The json files is given in the contructor and
#     will be analysed to filter the important data.
#     """
#
#     origin_stop = Stop()
#     destination_stop = Stop()
#     depature_time = models.DateTimeField('depature')
#     duration = models.TimeField('duration')
#    path = models.ForeignKey(RouteStop)

#     line = RouteStop()


#class RouteStop(models.Model):
#    stop = models.ForeignKey(Stop)
#    route = models.ForeignKey(Route)

@python_2_unicode_compatible  # only if you need to support Python 2
class efaStop():
    data = ""
    value = -1
    quality = -1

    def __init__(self, stopid, name, quality):
        self.value = name
        self.data = stopid
        self.quality = int(quality)

    def __str__(self):
        return self.value + " " + self.data

class Coord():
    latitude = 0
    longitude = 0

    def __init__(self, lat, lng):
        self.latitude = lat
        self.longitude = lng
