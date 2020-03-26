from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls import url
from django.views.generic import TemplateView
from django.views.static import serve 

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('points.api.urls')),
    path(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}), 
    path(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), 
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
