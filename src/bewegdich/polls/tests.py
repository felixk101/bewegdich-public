from django.test import TestCase

from controller import *
# Create your tests here.


print("BLUB")
#Test
origin = "Hirblingen Augsburg"
destination = "fachhochschule Augsburg"
start = [10.90529, 48.35882]  # fachhochschule Augsburg
#route = find_startstation(origin, destination)

test_time = datetime.datetime(2016, 6, 1, 10, 0, 0, 0)

routes = get_routes(start ,"augsburg hauptbahnhof",test_time)
assert len(routes) is 4
assert routes[0].origin_stop.name == "Augsburg Haunstetter Str. Bf"
assert routes[0].destination_stop.name ==  'Augsburg Hbf'
assert routes[0].duration ==  datetime.time(0,15,0,0)
assert len(routes[0].path) is 2
#assert routes[0].path[0].depaturetime is datetime.datetime(2016,)

