from rest_framework import serializers
from points.models import Point


class PointSerializer(serializers.ModelSerializer):
    class Meta:
        model = Point
        fields = ('id', 'title', 'longDescription', 'shortDescription', 'objectID',
                  'longitude', 'latitude', 'declaredClass', 'Type','imageURL')


