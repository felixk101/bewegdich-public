# -*- coding: utf-8 -*-
import codecs
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from controller import Controller
import location as loc
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from serializers import Efa_stop_list_serializer
from serializers import StopSerializer, RouteListSerializer, RouteList, Walkingpath_serializer
from variables import SPEED, LOCATION
from models import Coord
from location import get_location,set_location


@csrf_exempt
def index(request):
    return render(request, 'index.html', {
        'section': {
            'title': 'Beweg Dich',
            'location': loc.get_location(request),
            'settings': {
                'speed': {
                    'min': 0.1,
                    'max': 2,
                    'step': 0.1,
                    'value': 1
                }
            }
        }
    })

@csrf_exempt
def stoplist(request):
    """
     Returns a List of possible Stops which fit to the given name
     e.g. http://127.0.0.1:8000/api/stopList/?query=hauptbahnhof
    :param request:
    :return: a json
    """
    initSession(request)
    if request.method == 'GET':
        if "query" not in request.GET:
            return JSONResponse({'error': "qurey not found"}, status=400)
        if "longitude" not in request.GET:
            return JSONResponse({'error': "longitude not found"}, status=400)
        if "latitude" not in request.GET:
            return JSONResponse({'error': "latitude not found"}, status=400)

        query = codecs.encode(request.GET["query"], 'utf-8')
        longitude = codecs.encode(request.GET["longitude"], 'utf-8')
        if float(longitude) < 0:
            longitude = str(360 + float(longitude))
        latitude = codecs.encode(request.GET["latitude"], 'utf-8')
        if float(latitude) < 0:
            latitude = str(360 + float(latitude))
        c = Controller(request.session)
        # Sets the location of the user for further requests
        loc.set_location(request,Coord(latitude, longitude))

        stoplist = c.get_stoplist(query, [longitude, latitude])

        if type(stoplist) == int:
            return JSONResponse({'error': "There was an error on search: " + str(stoplist)}, status=400)

        serializer = Efa_stop_list_serializer(stoplist)

        json = {
            'query': query,
            'suggestions': serializer.data
        }
        return JSONResponse(json)

    elif request.method == 'POST':
        return JSONResponse({'error': "only get request supported"}, status=400)


@csrf_exempt
def route(request):
    """
    Searches for the best Routes including walking and returns it as json

    Example: http://127.0.0.1:8000/api/route/?latitude=48.35882&longitude=10.90529&stopid=2000100

    """
    initSession(request)
    if request.method == 'GET':
        if "stopid" not in request.GET:
            return JSONResponse({'error': "stopid not found"}, status=400)
        if "longitude" not in request.GET:
            return JSONResponse({'error': "longitude not found"}, status=400)
        if "latitude" not in request.GET:
            return JSONResponse({'error': "latitude not found"}, status=400)

        stopid = codecs.encode(request.GET["stopid"], 'utf-8')
        longitude = codecs.encode(request.GET["longitude"], 'utf-8')
        latitude = codecs.encode(request.GET["latitude"], 'utf-8')

        if float(longitude) < 0:
            longitude = str(360 + float(longitude))
        if float(latitude) < 0:
            latitude = str(360 + float(latitude))
        loc.set_location(request, Coord(latitude, longitude))
        c = Controller(request.session)
        # Here we do the search for the optimized Route
        routes = c.get_optimized_routes([longitude, latitude], stopid)
        if type(routes) == int:
            return JSONResponse({'error': "There was an error on search: " + str(routes)}, status=400)

        serializer = RouteListSerializer(RouteList(routes))
        return JSONResponse({
            'stopid': stopid,
            'longitude': longitude,
            'latitude': latitude,
            'data': serializer.data
        })

    elif request.method == 'POST':
        return JSONResponse({'error': "only get request supported"}, status=400)


@csrf_exempt
def settings_speed(request):
    """
    Sets or gets the current walkingspeed of the usersession
    Example: http://127.0.0.1:8000/api/settings/speed/?value=1.5

    """
    if request.method == 'GET':
        return JSONResponse({
            'value': request.session[SPEED],
        })

    elif request.method == 'POST':
        if "value" not in request.POST:
            return JSONResponse({'error': "value not found"}, status=400)

        request.session["speed"] = request.POST["value"]
        return JSONResponse({
            'value': request.session[SPEED],
        })


def initSession(request):
    """
    If the user visits this page the first time, the walkingspeed will be set to 1.0
    :param request:
    :return:
    """
    if SPEED not in request.session:
        request.session[SPEED] = 1.0

@csrf_exempt
def get_walkingpath(request):
    """
     Returns a List/Path of coordinates from origin to destination
     e.g. http://127.0.0.1:8000/api/getWalkingPath?originlat=48.1234&originlng=11.2034&destlat=48.4532&destlng=11.4563
    :param request:
    :return: a json
    """
    if request.method == 'GET':
        if "originlat" not in request.GET:
            return JSONResponse({'error': "origin latitude not found"}, status=400)
        if "originlng" not in request.GET:
            return JSONResponse({'error': "origin longitude not found"}, status=400)
        if "destlat" not in request.GET:
            return JSONResponse({'error': "destination latitude not found"}, status=400)
        if "destlng" not in request.GET:
            return JSONResponse({'error': "destination longitude not found"}, status=400)

        originlat = codecs.encode(request.GET["originlat"], 'utf-8')
        originlng = codecs.encode(request.GET["originlng"], 'utf-8')
        destlat = codecs.encode(request.GET["destlat"], 'utf-8')
        destlng = codecs.encode(request.GET["destlng"], 'utf-8')
        c = Controller(request.session)
        route = c.get_walking_Route([originlng, originlat],[destlng,destlat])
        path = c.get_walking_coords(route)

        if (type(path) == int):
            return JSONResponse({'error': "There was an error on search: " + str(path)}, status=400)

        serializer = Walkingpath_serializer(path)

        json = {
            'originlat': originlat,
            'originlng': originlng,
            'destlat': destlat,
            'destlng': destlng,
            'path': serializer.data
        }
        return JSONResponse(json)


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """

    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)
