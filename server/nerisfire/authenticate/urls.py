from django.urls import path, include
from django.contrib import admin
from .views import LoginView, LogoutView, RegisterUserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('register/', RegisterUserView.as_view(), name='register')
]
