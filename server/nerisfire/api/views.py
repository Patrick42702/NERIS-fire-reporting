from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from base.models import Organization, StatusRanges
from .serializers import OrganizationSerializer, StatusRangesSeralizer
import logging

logger = logging.getLogger('authenticate')

class CreateOrganizationView(generics.CreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

class StatusRangesView(generics.ListAPIView):
    queryset = StatusRanges.objects.all()
    serializer_class = StatusRangesSeralizer
    permission_classes = [permissions.IsAuthenticated]
    ordering_fields = ['user']  # Fields that can be ordered
    ordering = ['user']  # Default ordering

    def get_queryset(self):
        user = self.request.user
        logger.debug(f"this is the user object: {user}")
        return StatusRanges.objects.filter(user=user)


class CreateStatusRangesView(generics.CreateAPIView):
    queryset = StatusRanges.objects.all()
    serializer_class = StatusRangesSeralizer
    permission_classes = [permissions.IsAuthenticated]


