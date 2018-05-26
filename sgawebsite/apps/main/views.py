from django.shortcuts import render
from django.template.defaulttags import register
from .models import Member, Resource

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

def resources(request):
    return render(request, 'resources.html')

def events(request):
    return render(request, 'events.html')
