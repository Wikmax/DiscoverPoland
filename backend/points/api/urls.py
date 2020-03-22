from django.urls import path
from .views import PointDetailView, PointListView

urlpatterns = [
    path('', PointListView.as_view()),
    path('<pk>', PointDetailView.as_view()),
]
