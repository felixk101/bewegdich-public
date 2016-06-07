import select
from django.http import HttpResponse
import pickle
from django.http import *
from django.shortcuts import render_to_response, redirect
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect
from re import search
import math
from collections import namedtuple
from .forms import LocationForm
from  controller import get_optimized_routes, get_coords, get_stoplist
from controller import get_stoplist as getStopList
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from serializers import Efa_stop_list_serializer
import datetime
from route import Stop, Route
import codecs

from serializers import StopSerializer, RouteListSerializer, RouteList

listi = []


# @login_required(login_url='/polls/login/')
def get_dest(request):
    # if this is a POST request we need to process the form data

    form = LocationForm()

    return render(request, 'form.html', {'form': form})


def index(request):
    return render(request, 'index.html')


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


def list(request):
    """

    Shows a selection of the best routes in a list to select

    :param request:
    :return:
    """
    global listi

    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = LocationForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            #  print('coords: ', form.cleaned_data['coords'])
            #  print(form.cleaned_data['dest'])

            dest = form.cleaned_data['dest']

            start = form.cleaned_data['coords'].split(",")

            #### For Testing Only: ####
            ### To get the same startlocation ####

            start = [10.90529, 48.35882]

            city = form.cleaned_data['city']
            routes = get_optimized_routes(start, city + ' ' + dest)
            if (type(routes) == int):
                return HttpResponse("Bei suche trat leider Fehler: " + str(routes) + " auf")
            listi = routes

            context = {
                'routes': routes
            }
            return render(request, 'list.html', context)
        else:
            return HttpResponseRedirect('/notvalid/')
    # if a GET (or any other method) we'll create a blank form
    else:
        return HttpResponseRedirect('/notvalid/')


# @login_required(login_url='/polls/login/')
def map(request):
    form = LocationForm()
    context = {
        'form': form,
    }
    return render(request, 'map.html', context)


def route(request, route_id):
    """

    With the given route_id this page returns the selected route
    """
    route_id = int(route_id)

    # This route is a testing route
    if route_id == 66:
        pkl_file = open('testroute.json', 'r')
        selected_route = pickle.load(pkl_file)
        pkl_file.close()
    elif len(listi) < route_id:
        return HttpResponse("Bei der ausgewaehlten Route trat leider in Fehler auf")
    else:
        selected_route = listi[int(route_id)]
        text_file = open("testroute.json", "w")
        pickle.dump(selected_route, text_file)
        text_file.close()

    context = {
        'route': selected_route,
    }
    return render(request, 'navigation.html', context)

def get_stoplist(request):
    """
     Returns a List of possible Stops which fit to the given name
     e.g. http://127.0.0.1:8000/api/getStopList/?query=hauptbahnhof
    :param request:
    :return: a json
    """
    if request.method == 'GET':
        if "query" not in request.GET:
            return JSONResponse("query not found", status=201)
        query = codecs.encode(request.GET["query"], 'utf-8')

        if "latitude" not in request.GET:
            return JSONResponse("latitude not found", status=201)
        if "longitude" not in request.GET:
            return JSONResponse("longitude not found", status=201)

        query = request.GET["query"]
        latitude = float(request.GET["latitude"])
        longitude = float(request.GET["longitude"])
        city = closestCity(longitude, latitude)
        stoplist = getStopList(query)

        if (type(stoplist) == int):
            return HttpResponse({error: "There was an error on search: " + str(stoplist)}, status=400)

        serializer = Efa_stop_list_serializer(stoplist)

        json = {
            'query': query,
            'suggestions': serializer.data
        }
        return JSONResponse(json)


@csrf_exempt
def get_route(request):
    """
    Searches for the best Routes including walking and returns it as json

    Example: http://127.0.0.1:8000/api/getRoute/?originlat=48.35882&originlng=10.90529&stopid=2000100

    """
    if request.method == 'GET':
        if "stopid" not in request.GET:
            return JSONResponse({error: "stopid not found"}, status=400)
        if "longitude" not in request.GET:
            return JSONResponse({error: "longitude not found"}, status=400)
        if "latitude" not in request.GET:
            return JSONResponse({error: "latitude not found"}, status=400)

        stopid = codecs.encode(request.GET["stopid"], 'utf-8')
        longitude = codecs.encode(request.GET["longitude"], 'utf-8')
        latitude = codecs.encode(request.GET["latitude"], 'utf-8')

        # Here we do the search for the optimized Route
        routes = get_optimized_routes([longitude, latitude], stopid)
        if (type(routes) == int):
            return HttpResponse({error: "There was an error on search: " + str(routes)}, status=400)

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

def closestCity(longitude, latitude):
    """

    Determines the closest city for a given latitude and longitude
    using a list of the supported cities

    :return: the city as a string
    """
    ##longitude, latitude
    City = namedtuple('blubb', ['cityname', 'long', 'lat']);
    cities = [City('Augsburg', 10.890779, 48.3705449), City('Basel', 7.58769, 47.55814)];

    min_radius = 15000 #15 km
    for city in cities:
        dist = distance(city.long, city.lat, longitude, latitude)
        if(dist < min_radius):
            return city.cityname;
    #throw error here
    return ''

def distance(lon1, lat1, lon2, lat2):
    """
       Determines the distance for two sets of lon and lat
       :return: distance in meters
       """
    R = 6378.137 #Radius of earth in km
    dLat = (lat2 - lat1) * math.pi / 180
    dLon = (lon2 - lon1) * math.pi / 180
    a = math.sin(dLat / 2) * math.sin(dLat / 2) +\
        + math.cos(lat1 * math.pi / 180) * math.cos(lat2 * math.pi / 180) \
        * math.sin(dLon / 2) * math.sin(dLon / 2)
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    d = R * c
    return d * 1000; # meters

class JSONResponse(HttpResponse):
    """
    An HttpResponse that renders its content into JSON.
    """

    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)
