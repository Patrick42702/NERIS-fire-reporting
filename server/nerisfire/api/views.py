from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from base.models import Organization
from .serializers import OrganizationSerializer

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