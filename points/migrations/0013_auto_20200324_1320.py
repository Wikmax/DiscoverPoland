# Generated by Django 2.1.5 on 2020-03-24 12:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0012_auto_20200317_1335'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='point',
        ),
        migrations.DeleteModel(
            name='Image',
        ),
    ]