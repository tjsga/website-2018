"""sgawebsite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import include, url
from django.views.generic.simple import direct_to_template
from django.contrib import admin
from .apps.main import urls as main
import requests

about = requests.get("https://sgawebsite-e30e2.firebaseio.com/about.json")
forms = requests.get("https://sgawebsite-e30e2.firebaseio.com/forms.json")
with open("about.json", 'w') as f:
    f.write(str(about.json()[0]))
with open("forms.json", 'w') as f:
    f.write(str(forms.json()[0]))


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(main)),
    url(r'^robots\.txt$', direct_to_template, {'template': 'robots.txt', 'mimetype': 'text/plain'})
]
