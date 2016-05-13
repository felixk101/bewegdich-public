from django.conf.urls import url

from . import views


urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^Home/$', views.home, name='home'),
    url(r'^map/$', views.map, name='map'),
    url(r'^Profil/$', views.profil, name='profile'),
    url(r'^App/$', views.app, name='App'),
    url(r'^list/$', views.list, name='map'),
    url(r'^login/$', views.login_user, name='login_user'),
    url(r'^form/$', views.get_dest, name='form'),
    url(r'^route(?P<route_id>[0-9]+)/$', views.route, name='route'),

]