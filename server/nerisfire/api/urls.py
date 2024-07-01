from django.urls import path, include
from .views import CreateOrganizationView

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register org")
]
