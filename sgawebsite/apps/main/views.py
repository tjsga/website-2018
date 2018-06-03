from django.shortcuts import render
from django.template.defaulttags import register
from .models import Member, Resource
from django.contrib.staticfiles.storage import staticfiles_storage
import os


def index(request):
    return render(request, 'index.html')


def about(request):
    categories = list(Member.CATEGORIES)
    orgs = [c[0] for c in list(Member.CATEGORIES)]
    data = dict()
    context = dict()
    for c in categories:
        data[c[0]] = Member.objects.filter(category=c[0])
    print(categories)
    context['categories'] = categories
    context['orgs'] = orgs
    context['data'] = data
    return render(request, 'about.html', context)


@register.filter
def get_item(dictionary, key):
    return dictionary.get(key)


@register.filter
def username(obj):
    if obj.first_name and obj.last_name:
        if obj.year > 0:
            return str(str(obj.year) +
                       obj.first_name[:1] +
                       obj.last_name[:7]).lower()
        else:
            return str(obj.first_name[:1] + obj.last_name[:7]).lower()
    return None


@register.filter
def filename(obj):
    uname = username(obj)
    folder = 'img'
    filepath = os.path.join(folder, 'people', uname + '.jpg')
    if uname is not None and staticfiles_storage.exists(filepath):
        return os.path.join('static', filepath)
    else:
        return os.path.join('static', folder, 'profile.jpg')


def resources(request):
    return render(request, 'resources.html')


def events(request):
    return render(request, 'events.html')
