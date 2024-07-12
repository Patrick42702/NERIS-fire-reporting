from django.db.models import Q
from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from ..serializers import OrganizationSerializer
from base.models import Organization

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

    # GETs all organizations that contain the queried string (if any)
    def get_queryset(self):
        queryset = Organization.objects.all()
        dept_name = self.request.query_params.get('dept_name', None)

        if dept_name:
            queryset = queryset.filter(dept_name__icontains=dept_name)

        return queryset

# GET request -> retrieves a single org by its ID
class RetrieveOrganizationView(generics.RetrieveAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

# GETs, PUTs, and/or DELETEs a single org by its ID
class RetrieveUpdateDestroyOrganizationView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]

