from django.contrib import admin
from .models import Groceries
# Register your models here.


class GroceriesAdmin(admin.ModelAdmin):
    search_fields=['name']
    list_display =['name','price']
    list_filter = ['name','price']

admin.site.register(Groceries,GroceriesAdmin)