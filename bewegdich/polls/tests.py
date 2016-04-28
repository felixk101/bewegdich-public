from django.test import TestCase

from controller import find_startstation
# Create your tests here.

#Test
origin = "Hirblingen Augsburg"
destination = "fachhochschule Augsburg"
route = find_startstation(origin, destination)

#analyse and test route
# if route != null:
# .....
