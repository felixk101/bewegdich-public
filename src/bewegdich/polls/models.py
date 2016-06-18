from __future__ import unicode_literals

from django.utils.encoding import python_2_unicode_compatible



@python_2_unicode_compatible  # only if you need to support Python 2
class efaStop:
    data = ""
    value = -1
    quality = -1

    def __init__(self, stopid, name, quality):
        self.value = name
        self.data = stopid
        self.quality = int(quality)

    def __str__(self):
        return self.value + " " + self.data

    def __repr__(self):
        return self.__str__()

    def __eq__(self, other):
        return (isinstance(other, self.__class__)
                and self.data == other.data
                and self.value == other.value
                and self.quality == other.quality)

class Coord:
    latitude = 0
    longitude = 0

    def __init__(self, lat, lng):
        self.latitude = lat
        self.longitude = lng

    def __str__(self):
        print str(self.latitude) + ","+ str(self.longitude)

    def __repr__(self):
        return "Coord: " + self.latitude + ", " + self.longitude

    def __eq__(self, other):
        return (isinstance(other, self.__class__)
                and self.latitude == other.latitude
                and self.longitude == other.longitude)