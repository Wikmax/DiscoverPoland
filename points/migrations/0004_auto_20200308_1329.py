# Generated by Django 3.0.4 on 2020-03-08 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('points', '0003_auto_20200308_1328'),
    ]

    operations = [
        migrations.AlterField(
            model_name='point',
            name='shortDescription',
            field=models.TextField(blank=True, default=None, max_length=180, null=True),
        ),
    ]