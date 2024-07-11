from django.urls import path, include
from .views import CreateOrganizationView, CreateStatusRangesView, StatusRangesView, ListOrganizationView, RetrieveUpdateDestroyOrganizationView

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register org"),
    path('org/list', ListOrganizationView.as_view(), name="list_orgs"),
    path('org/<uuid:pk>', RetrieveUpdateDestroyOrganizationView.as_view(), name="retrieve_update_destroy_org"),
    path('status_ranges', StatusRangesView.as_view(), name="get statuses"),
    path('status_ranges/register', CreateStatusRangesView.as_view(), name="create statuses")
]
