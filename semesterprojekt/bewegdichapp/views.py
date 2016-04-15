from django.shortcuts import get_object_or_404, render
from .models import Location
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse



def index(request):
    latest_location_list = Location.objects.order_by('-timestamp')[:5]
    context = {'latest_location_list': latest_location_list}
    return render(request, 'bewegdichapp/index.html', context)

def detail(request, location_id):
    location = get_object_or_404(Location, pk=location_id)
    return render(request, 'bewegdichapp/detail.html',{'location': location})

def nearby(request, location_id):
    location = get_object_or_404(Location, pk=location_id)
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
    return HttpResponseRedirect(reverse('polls:results', args=(location.id,)))