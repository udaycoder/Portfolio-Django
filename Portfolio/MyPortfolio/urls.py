from django.conf.urls import url
from . import views

urlpatterns = [
url(r'^$',views.index,name='index'),
url(r'^compile/',views.compile,name='compile'),
url(r'^run/',views.run,name='run')]
