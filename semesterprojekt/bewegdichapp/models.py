from __future__ import unicode_literals
import datetime
from django.db import models
from django.utils import timezone

# Create your models here.

class Location(models.Model):
    longitude = models.CharField(max_length=20)
    latitude = models.CharField(max_length=20)
    timestamp = models.DateTimeField('time')

    def __str__(self):
        return self.latitude+', '+self.longitude

    def was_nearby_recently(self):
        return self.timestamp >= timezone.now() - datetime.timedelta(hours=1)