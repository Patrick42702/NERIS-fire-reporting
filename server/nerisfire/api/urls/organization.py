from django.urls import path, include
from ..views import *

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register org"),
    path('org/list', ListOrganizationView.as_view(), name="list_orgs"),
    path('org/<uuid:pk>/rud', RetrieveUpdateDestroyOrganizationView.as_view(), name="retrieve_update_destroy_org"),
]

