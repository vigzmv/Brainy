# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib.auth.models import User

from django.db import models

# Create your models here.

class Post(models.Model):
    user = models.ForeignKey(User, default=1)
    title = models.CharField(max_length=120)
    desc = models.CharField(max_length=120)
    img_url = models.CharField(max_length=120)
    content = models.TextField()
    # slug = models.SlugField(unique=True)

    # draft = models.BooleanField(default=False)
    # publish = models.DateField(auto_now=False, auto_now_add=False)
    updated = models.DateTimeField(auto_now=True, auto_now_add=False)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)

    def __unicode__(self):
        return self.title

    def __str__(self):
        return self.title

    class Meta:
        ordering = ["-timestamp", "-updated"]
