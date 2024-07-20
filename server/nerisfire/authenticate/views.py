from base.models import Member, Role, OrganizationRole
from django.contrib.auth.models import Group
#from rest_framework import serializers
from rest_framework import generics
from .seralizers import MemberSerializer, RoleSerializer, OrganizationRoleSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

import logging

logger = logging.getLogger('authenticate')  # Use the same logger name as defined in settings

# Create views here

class CreateMemberView(generics.CreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [AllowAny]

class CreateRoleView(generics.CreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    permission_classes = [IsAdminUser]

class ListRoleView(generics.ListAPIView):
    queryset = Role.objects.all().order_by('name')

    serializer_class = RoleSerializer
    permission_classes = [IsAdminUser]

class OrganizationRoleCreateView(generics.CreateAPIView):
    queryset = OrganizationRole.objects.all()
    serializer_class = OrganizationRoleSerializer

class OrganizationRoleListView(generics.ListAPIView):
    queryset = OrganizationRole.objects.all().order_by('id')
    serializer_class = OrganizationRoleSerializer
