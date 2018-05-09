from django.shortcuts import render
from .models import Member, Resource

def index(request):
    return render(request, 'index.html')

def about(request):
    categories = Member.CATEGORIES
    context = dict()
    data = dict()
    for c in categories:
        data[c[0]] = Member.objects.filter(category=c[0])
    context['categories'] = categories
    context['data'] = data
    print(context)
    return render(request, 'about.html', context)

def resources(request):
    return render(request, 'resources.html')

def events(request):
    return render(request, 'events.html')
