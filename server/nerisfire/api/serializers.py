from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import Group, User
from base import models


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Organization
        fields = ["id", "dept_name", "dept_phone", "admin_id", "location", "fdid", "verified"]

        def create(**validated_data):
            org = models.Organization.create_org(**validated_data)
            return org

# class IncidentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Incident
#         fields = ['activity ','account ,','station','shift','incident_type', 'number', 'hours']










