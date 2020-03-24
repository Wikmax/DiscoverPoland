from django import forms
from .models import Point
from django.forms import inlineformset_factory


class ImageForm(forms.ModelForm):
    file = forms.CharField()
    class Meta:
        model = Point
        fields = ['imageURL', ]


PointFormSet = inlineformset_factory(Point, form=ImageForm, extra=1)
