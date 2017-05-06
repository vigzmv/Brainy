from django.conf.urls import url
from views import *

urlpatterns = [
    url(r'^add/post/', addPost),
    url(r'^', index),
]
