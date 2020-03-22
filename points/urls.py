from django.urls import path
from . import views

app_name = 'posts'

urlpatterns = [
    path('', views.PointList.as_view(), name='list'),
    path('new/', views.PointCreate.as_view(), name='create'),
    path('<int:pk>/', views.PointDetail.as_view(), name='detail'),
]
