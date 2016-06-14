# -*- coding: utf-8 -*-
from . import views
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static

urlpatterns = [
                  url(r'^$', views.index, name='index'),
                  url(r'^login/$', views.login, name='login'),
                  url(r'^api/route/$', views.route, name='route'),
                  url(r'^api/stoplist/$', views.stoplist, name='stoplist'),
                  url(r'^api/settings/speed/$', views.settings_speed, name='settings.speed'),
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
