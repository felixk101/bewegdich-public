from django.http import HttpResponse
from django.http import *
from django.shortcuts import render_to_response,redirect
from django.template import RequestContext
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render
from django.http import HttpResponseRedirect

from .forms import LocationForm
from  controller import get_optimized_route,get_coords



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
            dest = get_coords(form.cleaned_data['dest'])
            start = get_coords(form.cleaned_data['start'])
            city = form.cleaned_data['city']
            route = get_optimized_route(form.cleaned_data['start'] + ' ' + city[0],form.cleaned_data['dest'] + ' ' + city[0])
            context = dict(form=form)
            if type(route) == int:
                context['err'] = 1
                if route == 1:  # Origin or Destination not found
                    context['msg'] = "Start oder Ziel wurde nicht gefunden"
                else:
                    context['msg'] = "Unbekannter Fehler (" + str(route) + ")"

            else:  # If everything is correct
               context['showpath'] = 1
               context['start'] = form.cleaned_data['start']
               context['dest'] = form.cleaned_data['dest']
               context['startlat'] = start[0]
               context['startlng'] = start[1]
               context['destlat'] = dest[0]
               context['destlng'] = dest[1]
               context['route'] = route.path


            return render(request,'map.html',context)
        else:
            return HttpResponseRedirect('/notvalid/')
    # if a GET (or any other method) we'll create a blank form

    form = LocationForm()
    context = {
        'form': form
    }
    return render(request,'map.html', context)


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


