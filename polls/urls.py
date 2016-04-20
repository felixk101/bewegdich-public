from django.conf.urls import url,patterns

from . import views


urlpatterns = [
    url(r'^main/$', views.index, name='index'),
    url(r'^map/$', views.map, name='map'),
    url(r'^login/$', views.login_user, name='login_user'),
    url(r'^form/$', views.get_dest, name='form'),
]