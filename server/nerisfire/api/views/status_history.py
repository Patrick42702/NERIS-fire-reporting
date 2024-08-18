from django.db.models import Q
from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from base.models import StatusHistory
from ..serializers import StatusHistorySeralizer
from datetime import datetime

class ListStatusHistoryView(generics.ListAPIView):
    queryset = StatusHistory.objects.all()
    serializer_class = StatusHistorySeralizer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        all = self.request.query_params('all', None)
        # if the user is staff and passes in the 'all' param, return all staus historys. Otherwise just return the users
        if all and user.is_staff:
            queryset = StatusHistory.objects.all()
        else:
            queryset = StatusHistory.objects.filter(user=user)

        start_date = self.request.query_params.get('start_date', None)
        if start_date:
            # assume start_date passed in as appropriate format string
            try:
                dt = datetime.strptime(start_date, '%Y-%m-%d')
                queryset = StatusHistory.objects.filter(Q(start_date__gt=dt))
            except ValueError as e:
                return Response(f"Error: {e}", 400)

        end_date = self.request.query_params.get('end_date', None)
        if end_date:
            # assume end_date passed in as appropriate format string
            try:
                dt = datetime.strptime(end_date, '%Y-%m-%d')
                queryset = StatusHistory.objects.filter(Q(end_date__lt=dt))
            except ValueError as e:
                return Response(f"Error: {e}", 400)

        return queryset

class CreateStatusHistoryView(generics.CreateAPIView):
    queryset = StatusHistory.objects.all()
    serializer_class = StatusHistorySeralizer
    permission_classes = [permissions.IsAuthenticated]
    ordering_fields = ['id']  # Fields that can be ordered
    ordering = ['id']  # Default ordering

class RetrieveUpdateDestroyStatusHistoryView(generics.RetrieveUpdateDestroyAPIView):
    queryset = StatusHistory.objects.all()
    serializer_class = StatusHistorySeralizer
    permission_classes = [permissions.IsAuthenticated]



