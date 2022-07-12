#from django.shortcuts import render
from django.http import HttpResponse
from django.views import View

class WelcomeView(View):
    def get(self, request):
        return HttpResponse('Hello Django View')

class SayHelloView(View):
    def get(self, request, *args, **kwargs):
        name = kwargs.get('name')
        return HttpResponse(f'Hello {name}! Nice to meet ya')
