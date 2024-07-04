from django.urls import path, include
from .views import CreateOrganizationView, CreateStatusRangesView, StatusRangesView

urlpatterns = [
    path('org/register', CreateOrganizationView.as_view(), name="register org"),
    path('status_ranges', StatusRangesView.as_view(), name="get statuses"),
    path('status_ranges/register', CreateStatusRangesView.as_view(), name="create statuses")
]
