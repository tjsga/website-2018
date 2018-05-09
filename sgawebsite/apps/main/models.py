from django.db import models

# Create your models here.
class Member(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    year = models.IntegerField()
    intro = models.CharField(max_length=140)
    title = models.CharField(max_length=30)
    CATEGORIES = (('officers', 'Officers'), ('excomm', 'Executive Committee'), ('senators', 'Class Senators'), ('sponsors', 'Sponsors'))
    category = models.CharField(max_length=1, choices=CATEGORIES)

class Resource(models.Model):
    name = models.CharField(max_length=50)
    link = models.URLField()
    text = models.CharField(max_length=140)
    CATEGORIES = (('general', 'General Resources'), ('event', 'Event Resources'))
    category = models.CharField(max_length=1, choices=CATEGORIES)
