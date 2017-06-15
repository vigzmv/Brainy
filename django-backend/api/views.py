# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import redirect
from django.http import HttpResponse, JsonResponse, HttpResponseNotFound
from django.core import serializers

# Create your views here.

from models import Post


def index(request):
    return HttpResponse(content=b'Api Server Running')


@csrf_exempt
def addPost(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        desc = request.POST.get('desc')
        img_url = request.POST.get('img_url')
        content = request.POST.get('content')

        post = Post.objects.create(title=title,
                                   desc=desc,
                                   img_url=img_url,
                                   content=content
                                   )

        return redirect('http://localhost:3000/post/?post=' + str(post.id))

    else:
        return HttpResponseNotFound(content=b'Not Found')


def getPost(request):
    post_id = int(request.GET.get('post', ''))
    if Post.objects.filter(id=post_id).first():
        post = Post.objects.filter(id=post_id)
        obj = serializers.serialize('json', post)
        return HttpResponse(obj, content_type='json')
    else:
        result = {'message': 'Not Found'}
        return JsonResponse(result)


def getAllPost(request):
    posts = Post.objects.all()
    obj = serializers.serialize('json', posts)
    return HttpResponse(obj, content_type='json')
