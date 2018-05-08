from django.conf.urls import url

from .views import *

urlpatterns = [
    url(r'^$', index, name='index'),
    url(r'about', about, name='about'),
    url(r'resources', resources, name='resources'),
    url(r'events', events, name='events'),

]
