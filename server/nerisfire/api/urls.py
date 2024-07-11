from django.urls import path, include
from .views import *

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register org"),
    path('org/list/', ListOrganizationView.as_view(), name="list_orgs"),
    path('org/<uuid:pk>', RetrieveOrganizationView.as_view(), name="retrieve_org"),

    path('status_history', StatusRangesView.as_view(), name="get statuses"),
    path('status_history/register', CreateStatusRangesView.as_view(), name="create statuses"),
    path('status_history/<int:pk>/edit/', EditStatusRangesView.as_view(), name="edit statuses")
]
