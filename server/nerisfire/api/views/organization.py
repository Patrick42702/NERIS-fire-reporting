from django.db.models import Q
from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from ..serializers import OrganizationSerializer
from base.models import Organization
from authenticate.permissions import OrganizationAccessPolicy
from rest_access_policy import AccessViewSetMixin
import logging
logger = logging.getLogger('api')

# POST request -> creates new org
class CreateOrganizationView(generics.CreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    access_policy = OrganizationAccessPolicy

# GET request -> list of all orgs
class ListOrganizationView(AccessViewSetMixin, generics.ListAPIView):
    queryset = Organization.objects.all().order_by('dept_name')
    serializer_class = OrganizationSerializer
    access_policy = OrganizationAccessPolicy

    # GETs all organizations that contain the queried string (if any)
    def get_queryset(self):
        queryset = Organization.objects.all().order_by('dept_name')
        dept_name = self.request.query_params.get('dept_name', None)

        if dept_name:
            queryset = queryset.filter(dept_name__icontains=dept_name)

        return queryset


# GETs, PUTs, and/or DELETEs a single org by its ID
class RetrieveUpdateDestroyOrganizationView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

