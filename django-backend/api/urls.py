from django.conf.urls import url
from api.views import *

urlpatterns = [
    url(r'^add/post/', addPost),
    url(r'^get/post/', getPost),
    url(r'^all/post/', getAllPost),
    url(r'^', index),
]
