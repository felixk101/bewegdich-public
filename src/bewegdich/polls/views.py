# -*- coding: utf-8 -*-
import codecs
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from controller import get_optimized_routes,get_walking_coords
from controller import get_stoplist as getStopList
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from serializers import Efa_stop_list_serializer, Walkingpath_serializer
from serializers import StopSerializer, RouteListSerializer, RouteList


@csrf_exempt
def index(request):
    return render(request, 'index.html')


@csrf_exempt
def login(request):
    logout(request)
    username = password = ''
    if request.POST:
        username = codecs.encode(request.POST['username'], 'utf-8')
        password = codecs.encode(request.POST['password'], 'utf-8')

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect('/form/')
    return render_to_response('login.html', context_instance=RequestContext(request))


@csrf_exempt
def get_stoplist(request):
    """
     Returns a List of possible Stops which fit to the given name
     e.g. http://127.0.0.1:8000/api/getStopList/?query=hauptbahnhof
    :param request:
    :return: a json
    """
    if request.method == 'GET':
        if "query" not in request.GET:
            return JSONResponse({'error': "qurey not found"}, status=400)
        if "longitude" not in request.GET:
            return JSONResponse({'error': "longitude not found"}, status=400)
        if "latitude" not in request.GET:
            return JSONResponse({'error': "latitude not found"}, status=400)

        query = codecs.encode(request.GET["query"], 'utf-8')
        longitude = codecs.encode(request.GET["longitude"], 'utf-8')
        latitude = codecs.encode(request.GET["latitude"], 'utf-8')
        stoplist = getStopList(query, [longitude, latitude])

        if (type(stoplist) == int):
            return JSONResponse({'error': "There was an error on search: " + str(stoplist)}, status=400)

        serializer = Efa_stop_list_serializer(stoplist)

        json = {
            'query': query,
            'suggestions': serializer.data
        }
        return JSONResponse(json)

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
        path = get_walking_coords([originlng, originlat],[destlng,destlat])

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




@csrf_exempt
def get_route(request):
    """
    Searches for the best Routes including walking and returns it as json

    Example: http://127.0.0.1:8000/api/getRoute/?latitude=48.35882&longitude=10.90529&stopid=2000100

    """
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

        # Here we do the search for the optimized Route
        routes = get_optimized_routes([longitude, latitude], stopid)
        if (type(routes) == int):
            return JSONResponse({'error': "There was an error on search: " + str(routes)}, status=400)

        serializer = RouteListSerializer(RouteList(routes))
        return JSONResponse({
            'stopid': stopid,
            'longitude': longitude,
            'latitude': latitude,
            'data': serializer.data
        })

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = StopSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JSONResponse(serializer.data, status=201)
        return JSONResponse(serializer.errors, status=400)


class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """

    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)
