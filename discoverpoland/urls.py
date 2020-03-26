from django.contrib import admin
from django.urls import path, include, re_path, url
from django.conf import settings
from django.conf.urls import url, patterns
from django.views.generic import TemplateView
from django.views.static import serve 

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('points.api.urls')),
    url(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}), 
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}), 
    re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
]
