from django.db import models

# Create your models here.


class Member(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    year = models.IntegerField(blank=True, default=-1)
    intro = models.CharField(max_length=140, blank=True, default='')
    title = models.CharField(max_length=30, blank=True, default='')
    CATEGORIES = (('officers', 'Officers'), ('excomm', 'Executive Committee'),
                  ('senators', 'Class Senators'), ('sponsors', 'Sponsors'))
    category = models.CharField(max_length=10, choices=CATEGORIES)

    def __str__(self):
        return self.first_name + ' ' + self.last_name


class Resource(models.Model):
    name = models.CharField(max_length=50)
    link = models.URLField()
    text = models.CharField(max_length=140)
    CATEGORIES = (('general', 'General Resources'),
                  ('event', 'Event Resources'))
    category = models.CharField(max_length=1, choices=CATEGORIES)

    def __str__(self):
        return self.name
