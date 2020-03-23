from django.contrib import admin
from .models import Point, Image


class ImageInline(admin.TabularInline):
    model = Image
    extra = 1


class PointAdmin(admin.ModelAdmin):
    fieldsets = [
        (
            None,
            {
                'fields': [
                    'objectID',
                    'title',
                    'longDescription',
                    'shortDescription',
                    'longitude',
                    'latitude',
                    'declaredClass',
                    'Type',
                ]
            }
        )
    ]
    inlines = [ImageInline]
    list_display = ('objectID',
                    'title',
                    'longDescription',
                    'shortDescription',
                    'longitude',
                    'latitude',
                    'declaredClass',
                    'Type',)


admin.site.register(Point, PointAdmin)
