from base.models import Member
#from rest_framework import serializers
from rest_framework import generics
from .seralizers import MemberSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

import logging

logger = logging.getLogger('authenticate')  # Use the same logger name as defined in settings

# Create views here

class CreateMemberView(generics.CreateAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [AllowAny]

