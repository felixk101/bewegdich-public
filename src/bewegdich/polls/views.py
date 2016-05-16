from django.http import HttpResponse
import pickle
from django.http import *
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect

from .forms import LocationForm
from  controller import get_optimized_routes,get_coords
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

from serializers import StopSerializer
listi = []

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

            start = [10.90529,48.35882]

            city = form.cleaned_data['city']
            routes = get_optimized_routes(start, city + ' ' +dest )
            if(type(routes) == int):
                return HttpResponse("Bei suche trat leider Fehler: "+ str(routes) + " auf")
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
    return render(request,'map.html', context)

# @login_required(login_url='/polls/login/')
def home(request):
    form = LocationForm()
    context = {
        'form': form,
    }
    return render(request,'home.html', context)


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


def route(request,route_id):
    """

    With the given route_id this page returns the selected route
    """
    route_id = int(route_id)

    # This route is a testing route
    if route_id == 66:
        pkl_file = open('../static/testroute.pkl', 'rb')
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


import datetime
from route import Stop

@csrf_exempt
def get_route(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
      #  snippets = Stop.objects.all()

        #stop = Stop("asdf", lat="3", lng="351",depaturetime=datetime.datetime.now(),walkingtime=10)
        stop = Stop("asdf", "3", "351", 10)
        if "origin" not in request.GET:
            return JSONResponse("origin not found", status=201)
        if "destination" not in request.GET:
            return JSONResponse("destination not found", status=201)

        origin = request.GET["origin"]
        destination = request.GET["destination"]

        # Here you could do the search for the optimized Route

        serializer = StopSerializer(stop)
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
