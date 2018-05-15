from django.conf.urls import url
from . import views

urlpatterns = [
	url(r'^$',views.blog_home,name='bloghome'),
	url(r'^create/$',views.post_create,name='post_create'),
	url(r'^(?P<slug>[\w-]+)/$',views.post_detail,name='detail'),
	url(r'^(?P<slug>[\w-]+)/edit/$',views.post_update,name='update'),
	url(r'^(?P<slug>[\w-]+)/delete/$',views.post_delete,name='post_delete')
]