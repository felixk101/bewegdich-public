# -*- coding: utf-8 -*-
from . import views
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^login/$', views.login, name='login'),
    url(r'^api/getRoute/$', views.get_route, name='getroute'),
    url(r'^api/getStopList/$', views.get_stoplist, name='getstoplist'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)