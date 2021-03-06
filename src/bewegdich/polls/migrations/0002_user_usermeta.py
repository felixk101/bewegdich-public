# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-04-19 17:58
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uname', models.CharField(max_length=30)),
                ('mail', models.CharField(max_length=100)),
                ('pw', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Usermeta',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(max_length=50)),
                ('value', models.CharField(max_length=50)),
                ('userid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='polls.User')),
            ],
        ),
    ]
