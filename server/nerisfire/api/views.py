from django.db.models import Q
from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from base.models import Organization, StatusRanges
from .serializers import OrganizationSerializer, StatusRangesSeralizer
from datetime import datetime
import logging

logger = logging.getLogger('authenticate')

# POST request -> creates new org
class CreateOrganizationView(generics.CreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

# GET request -> list of all orgs
class ListOrganizationView(generics.ListAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

# GET request -> retriev es a single org by its ID
class RetrieveOrganizationView(generics.RetrieveAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

class StatusRangesView(generics.ListAPIView):
    queryset = StatusRanges.objects.all()
    serializer_class = StatusRangesSeralizer
    permission_classes = [permissions.IsAuthenticated]
    ordering_fields = ['id']  # Fields that can be ordered
    ordering = ['id']  # Default ordering

    def get_queryset(self):
        queryset = StatusRanges.objects.all()

        user_bool = self.request.query_params.get('user_bool', None)
        if user_bool:
            user = self.request.user
            queryset = StatusRanges.objects.filter(user=user)

        start_date = self.request.query_params.get('start_date', None)
        if start_date:
            # assume start_date passed in as appropriate format string
            try:
                dt = datetime.strptime(start_date, '%Y-%m-%d')
                queryset = StatusRanges.objects.filter(Q(start_date__gt=dt))
            except ValueError as e:
                return Response(f"Error: {e}", 400)

        end_date = self.request.query_params.get('end_date', None)
        if end_date:
            # assume end_date passed in as appropriate format string
            try:
                dt = datetime.strptime(end_date, '%Y-%m-%d')
                queryset = StatusRanges.objects.filter(Q(end_date__lt=dt))
            except ValueError as e:
                return Response(f"Error: {e}", 400)

        return queryset

class CreateStatusRangesView(generics.CreateAPIView):
    queryset = StatusRanges.objects.all()
    serializer_class = StatusRangesSeralizer
    permission_classes = [permissions.IsAuthenticated]


