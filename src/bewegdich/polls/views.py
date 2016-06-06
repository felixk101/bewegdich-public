import base64
import cPickle as pickle

from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer

from  controller import get_optimized_routes
from controller import get_stoplist as getStopList
from serializers import Efa_stop_list_serializer
from serializers import StopSerializer, RouteListSerializer, RouteList
from .forms import LocationForm


# @login_required(login_url='/polls/login/')
def get_dest(request):
    # if this is a POST request we need to process the form data

    form = LocationForm()

    return render(request, 'form.html', {'form': form})


# @login_required(login_url='/polls/login/')
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


def list(request):
    """

    Shows a selection of the best routes in a list to select

    :param request
    :return a rendered list.html document with the given context
    """

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

            request.session['session_routes'] = base64.b64encode(pickle.dumps(routes))

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
    """
    Shows destination form along with a map
    """
    form = LocationForm()
    context = {
        'form': form,
    }

    return render(request, 'map.html', context)

# @login_required(login_url='/polls/login/')
def home(request):
    form = LocationForm()
    context = {
        'form': form,
    }
    return render(request, 'home.html', context)


def login_user(request):
    logout(request)
    username = password = ''
    if request.POST:
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect('/form/')
    return render_to_response('login.html', context_instance=RequestContext(request))


def route(request, route_id):
    """

    With the given route_id this page returns the selected route
    """
    route_id = int(route_id)
    listi = pickle.loads(base64.b64decode(request.session['session_routes']))

    # This route is a testing route
    if route_id == 66:
        pkl_file = open('testroute.json', 'r')
        selected_route = pickle.load(pkl_file)
        pkl_file.close()
    elif len(listi) < route_id:
        return HttpResponse("Bei der ausgewaehlten Route trat leider in Fehler auf")
    else:
        selected_route = listi[int(route_id)]

    context = {
        'route': selected_route,
    }

    return render(request, 'navigation.html', context)


def app(request):
    return render(request, 'app.html')


def profil(request):
    return render(request, 'profil.html')


def get_stoplist(request):
    """
     Returns a List of possible Stops which fit to the given name
     e.g. http://127.0.0.1:8000/api/getstoplist/?name=hauptbahnhof
    :param request:
    :return: a json
    """
    if request.method == 'GET':
        if "name" not in request.GET:
            return JSONResponse("name not found", status=201)
        name = request.GET["name"]
        stoplist = getStopList(name)

        if (type(stoplist) == int):
            return HttpResponse("Bei suche trat leider Fehler: " + str(stoplist) + " auf")
        serializer = Efa_stop_list_serializer(stoplist)
        return JSONResponse(serializer.data)


@csrf_exempt
def get_route(request):
    """
    Searches for the best Routes including walking and returns it as json

    Example: http://127.0.0.1:8000/api/getroute/?originlat=48.35882&originlng=10.90529&destination=augsburg%20hauptbahnhof

    """
    if request.method == 'GET':
        if "originlat" not in request.GET:
            return JSONResponse("origin latitude not found", status=201)
        if "originlng" not in request.GET:
            return JSONResponse("origin longitude not found", status=201)
        if "destination" not in request.GET:
            return JSONResponse("destination not found", status=201)

        originlat = request.GET["originlat"]
        originlng = request.GET["originlng"]
        destination = request.GET["destination"]

        # Here we do the search for the optimized Route
        routes = get_optimized_routes([originlng, originlat], destination)
        if (type(routes) == int):
            return HttpResponse("Bei suche trat leider Fehler: " + str(routes) + " auf")

        # pkl_file = open('C:/UNI/beweg/testroute.json', 'r')
        # route = pickle.load(pkl_file)
        # routes = [route,route]
        # pkl_file.close()

        serializer = RouteListSerializer(RouteList(routes))
        return JSONResponse(serializer.data)

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
