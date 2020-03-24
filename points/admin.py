from django.contrib import admin
from .models import Point

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
                    'imageURL'
                ]
            }
        )
    ]
    list_display = ('objectID',
                    'title',
                    'longDescription',
                    'shortDescription',
                    'longitude',
                    'latitude',
                    'declaredClass',
                    'Type',
                    'imageURL')


admin.site.register(Point, PointAdmin)
