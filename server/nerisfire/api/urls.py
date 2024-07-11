from django.urls import path, include
from .views import CreateOrganizationView, CreateStatusRangesView, StatusRangesView, RetrieveOrganizationView, ListOrganizationView, UpdateOrganizationView, DeleteOrganizationView

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register org"),
    path('org/list/', ListOrganizationView.as_view(), name="list_orgs"),
    path('org/<uuid:pk>', RetrieveOrganizationView.as_view(), name="retrieve_org"),
    path('org/<uuid:pk>/update/', UpdateOrganizationView.as_view(), name="update_org"),
    path('org/<uuid:pk>/delete/', DeleteOrganizationView.as_view(), name="delete_org"),
    path('status_ranges', StatusRangesView.as_view(), name="get statuses"),
    path('status_ranges/register', CreateStatusRangesView.as_view(), name="create statuses")
]
