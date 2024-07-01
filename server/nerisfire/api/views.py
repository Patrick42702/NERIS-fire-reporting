from rest_framework.response import Response
from rest_framework import permissions, viewsets, generics
from base.models import Organization
from .serializers import OrganizationSerializer

class CreateOrganizationView(generics.CreateAPIView):
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer
    permission_classes = [permissions.IsAuthenticated]






