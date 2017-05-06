# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.views.decorators.csrf import csrf_exempt

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

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

        Post.objects.create(title=title, desc=desc, img_url=img_url, content=content)

        result = {'message' : 'done'}
        
        return JsonResponse(result)
