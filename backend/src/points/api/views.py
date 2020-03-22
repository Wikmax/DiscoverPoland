from rest_framework.generics import ListAPIView, RetrieveAPIView
from drf_multiple_model.views import ObjectMultipleModelAPIView

from points.models import Point, Image
from .serializers import PointSerializer, ImageSerializer


class PointListView(ObjectMultipleModelAPIView):
    querylist = [
        {'queryset': Point.objects.all(), 'serializer_class': PointSerializer},
        {'queryset': Image.objects.all(), 'serializer_class': ImageSerializer}
    ]



class PointDetailView(RetrieveAPIView):
    queryset = Point.objects.all()
    serializer_class = PointSerializer


