from base.models import Member
from django.contrib.auth.models import Group
#from rest_framework import serializers
from rest_framework import generics
from .seralizers import MemberSerializer, GroupSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser

import logging

logger = logging.getLogger('authenticate')  # Use the same logger name as defined in settings

# Create views here

class CreateMemberView(generics.CreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [AllowAny]

class CreateGroupView(generics.CreateAPIView):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [IsAdminUser]
