from django.conf.urls import url

from . import views
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', views.login, name='login'),
    url(r'^map/$', views.map, name='map'),
    url(r'^list/$', views.list, name='map'),
    url(r'^form/$', views.get_dest, name='form'),
    url(r'^route(?P<route_id>[0-9]+)/$', views.route, name='route'),
    url(r'^api/getRoute/$', views.get_route, name='getroute'),
    url(r'^api/getStopList/$', views.get_stoplist, name='getstoplist'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)