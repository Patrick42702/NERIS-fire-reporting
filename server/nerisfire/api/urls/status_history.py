from django.urls import path, include
from ..views import *

urlpatterns = [
    path('status_history', StatusHistoryView.as_view(), name="get statuses"),
    path('status_history/register', CreateStatusHistoryView.as_view(), name="create statuses"),
    path('status_history/<int:pk>/edit/', EditStatusHistoryView.as_view(), name="edit statuses")
]

