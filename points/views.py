from django.shortcuts import render
from django.views.generic import ListView, CreateView, DetailView
from .models import Point
from .forms import PointFormSet, ImageForm
from django.db import transaction


class PointList(ListView):
    model = Point
    context_object_name = 'points'


class PointCreate(CreateView):
    model = Point
    fields = ['imageURL', ]

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['point_formset'] = PointFormSet()
        return context

    def form_valid(self, form):
        point_formset = PointFormSet(self.request.POST, self.request.FILES)
        with transaction.atomic():
            self.object = form.save()

            if point_formset.is_valid():
                point_formset.instance = self.object
                point_formset.save()
        return super().form_valid(form)


class PointDetail(DetailView):
    model = Point
