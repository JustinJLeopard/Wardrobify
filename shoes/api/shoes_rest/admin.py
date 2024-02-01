from django.contrib import admin
from .models import BinVO, Shoe


@admin.register(BinVO)
class BinVOAdmin(admin.ModelAdmin):
    list_display = ('id', 'import_href', 'name')

@admin.register(Shoe)
class ShoeAdmin(admin.ModelAdmin):
    pass
