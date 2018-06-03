from django.contrib import admin

from .models import Member, Resource

'''
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'display')


class ResourceAdmin(admin.ModelAdmin):
    list_display = ('name', 'display')
'''
admin.site.register(Member)
admin.site.register(Resource)
