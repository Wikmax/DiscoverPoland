# Generated by Django 3.0.4 on 2020-03-09 12:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0005_auto_20200308_1330'),
    ]

    operations = [
        migrations.AlterField(
            model_name='point',
            name='title',
            field=models.CharField(max_length=10),
        ),
    ]
