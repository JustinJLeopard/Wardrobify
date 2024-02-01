from django.contrib import admin
from .models import LocationVO, Hat


@admin.register(LocationVO)
class LocationVOAdmin(admin.ModelAdmin):
    list_display = ('id', 'import_href', 'closet_name')


@admin.register(Hat)
class HatAdmin(admin.ModelAdmin):
    pass
