from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.getData),
    path('users/', views.getUsers)
]
