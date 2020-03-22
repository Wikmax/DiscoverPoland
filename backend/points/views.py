from django.shortcuts import render
from django.views.generic import ListView, CreateView, DetailView
from .models import Point, Image
from .forms import ImageForm, ImageFormSet
from django.db import transaction


class PointList(ListView):
    model = Point
    context_object_name = 'points'


class PointCreate(CreateView):
    model = Point
    fields = ['content', ]

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['image_formset'] = ImageFormSet()
        return context

    def form_valid(self, form):
        image_formset = ImageFormSet(self.request.POST, self.request.FILES)
        with transaction.atomic():
            self.object = form.save()

            if image_formset.is_valid():
                image_formset.instance = self.object
                image_formset.save()
        return super().form_valid(form)


class PointDetail(DetailView):
    model = Point
