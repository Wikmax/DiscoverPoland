from django import forms
from .models import Point, Image
from django.forms import inlineformset_factory


class ImageForm(forms.ModelForm):
    file = forms.ImageField()

    class Meta:
        model = Image
        fields = ['file', ]


ImageFormSet = inlineformset_factory(Point, Image, form=ImageForm, extra=1)
