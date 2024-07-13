from django.urls import path, include
from ..views import *

urlpatterns = [
    path('status_history', ListStatusHistoryView.as_view(), name="get statuses"),
    path('status_history/register', CreateStatusHistoryView.as_view(), name="create statuses"),
    path('status_history/<int:pk>/rud', RetrieveUpdateDestroyStatusHistoryView.as_view(), name="edit statuses")
]

