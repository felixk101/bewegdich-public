from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^map/$', views.map, name='map'),
    url(r'^list/$', views.list, name='map'),
    url(r'^login/$', views.login_user, name='login_user'),
    url(r'^form/$', views.get_dest, name='form'),
    url(r'^route(?P<route_id>[0-9]+)/$', views.route, name='route'),

]