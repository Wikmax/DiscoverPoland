from rest_framework.generics import ListAPIView, RetrieveAPIView
from points.models import Point
from .serializers import PointSerializer


class PointListView(ListAPIView):
    queryset = Point.objects.all()
    serializer_class = PointSerializer


class PointDetailView(RetrieveAPIView):
    queryset = Point.objects.all()
    serializer_class = PointSerializer


