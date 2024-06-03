from rest_framework import serializers
from .models import Member

class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = ["url", "first_name", "last_name", "date_of_birth"]
