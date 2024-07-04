from django.urls import path, include
from .views import CreateOrganizationView, ListOrganizationView, RetrieveOrganizationView

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register_org"),
    path('org/list', ListOrganizationView.as_view(), name="list_orgs"),
    path('org/<uuid:pk>', RetrieveOrganizationView.as_view(), name="retrieve_org")
]
