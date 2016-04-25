from django.http import HttpResponse
from django.http import *
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect

from .forms import LocationForm

import json
import urllib


# @login_required(login_url='/polls/login/')
def get_dest(request):
    # if this is a POST request we need to process the form data

    form = LocationForm()

    return render(request, 'form.html', {'form': form})


# @login_required(login_url='/polls/login/')
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


# @login_required(login_url='/polls/login/')
def map(request):
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        form = LocationForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required
            # ...
            # redirect to a new URL:
            print(form.cleaned_data['dest'])
            dest = getCoords(form.cleaned_data['dest'])
            start =  getCoords(form.cleaned_data['start'])
            print(dest)
            context = {
                'form': form,
                'start': form.cleaned_data['start'],
                'dest': form.cleaned_data['dest'],
                'startlat': start[0],
                'startlng': start[1],
                'destlat': dest[0],
                'destlng': dest[1]
            }
            return render(request,'map.html',context)
        else:
            return HttpResponseRedirect('/notvalid/')
    # if a GET (or any other method) we'll create a blank form

    form = LocationForm()


    return render(request,'map.html',{'form': form})


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


def getCoords(place):
    key = "AIzaSyAV52eNjBjVhoTtaOwdWbd8iQ7Cia6X9c0"
    optionalSecondKey = "AIzaSyCVP9DkstDfjlTYgj0XlU5YlzU9gI3pqOU"
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + place + "&key=" + key
    response = urllib.urlopen(url)
    data = json.loads(response.read())
    lat = data["results"][0]["geometry"]["location"]["lat"]
    long = data["results"][0]["geometry"]["location"]["lng"]
    return [lat,long]
