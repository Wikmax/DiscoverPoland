from django.db import models
from django.urls import reverse


class Point(models.Model):
    objectID = models.IntegerField(default=None, blank=True, null=True)
    title = models.CharField(max_length=180)
    longDescription = models.TextField(default=None, blank=True, null=True)
    shortDescription = models.TextField(
        max_length=200, default=None, blank=True, null=True)
    longitude = models.FloatField(default=None, blank=True, null=True)
    latitude = models.FloatField(default=None, blank=True, null=True)
    declaredClass = models.CharField(
        max_length=180, default=None, blank=True, null=True)
    Type = models.CharField(
        max_length=180, default=None, blank=True, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('posts:detail', kwargs={'pk': self.pk})


class Image(models.Model):
    point = models.ForeignKey(
        Point, on_delete=models.CASCADE, default=None, blank=True, null=True)
    file = models.ImageField(upload_to='images')
