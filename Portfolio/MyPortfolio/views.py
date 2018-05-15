from django.shortcuts import render
import requests
from django.http import HttpResponse


def index(request):
       return render(request, 'MyPortfolio/port.html')
	   
def contact(request):
     return render(request,'MyPortfolio/basic.html',{'content':['Contact me at', 'udayanbaidya@gmail.com']})
	 

COMPILE_URL = u'https://api.hackerearth.com/v3/code/compile/'	 
RUN_URL = u'https://api.hackerearth.com/v3/code/run/'
CLIENT_SECRET = '62a42cd655bfb74fa2c458e824c11ecfd7a1aeff'

	 
def compile(request):
 code= request.GET.get('sourcecode',None)
 lang= request.GET.get('langused',None)
 consoleinput= request.GET.get('codeinput',None)
 data = {
    'client_secret': CLIENT_SECRET,
    'async': 0,
    'source': code,
    'lang': lang,
	'input': consoleinput,
    'time_limit': 5,
    'memory_limit': 262144
 }

 r = requests.post(COMPILE_URL, data=data)
 return HttpResponse(r, content_type='application/json')


def run(request):
 code= request.GET.get('sourcecode',None)
 lang= request.GET.get('langused',None)
 consoleinput= request.GET.get('codeinput',None)
 data = {
    'client_secret': CLIENT_SECRET,
    'async': 0,
    'source': code,
    'lang': lang,
	'input': consoleinput,
    'time_limit': 5,
    'memory_limit': 262144
 }

 r = requests.post(RUN_URL, data=data)
 return HttpResponse(r, content_type='application/json')