from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import Group, User
from base import models
import logging
logger = logging.getLogger('api')

class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Organization
        fields = ["id", "dept_name", "dept_phone", "admin_id", "location", "fdid", "verified"]

        def create(**validated_data):
            org = models.Organization.create_org(**validated_data)
            return org

class StatusRangesSeralizer(serializers.ModelSerializer):
    class Meta:
        model = models.StatusRanges
        fields = ["id", "user", "start_date", "end_date", "status", "duration"]
        ordering = ['id']
        ordering_fields = ['id']  # Fields that can be ordered
        extra_kwargs = {
            'duration': {"required": False},
            'end_date': {"required": False},
        }

    def create(self, validated_data):
        logger.debug("this is calling the create ranges method")
        print("calling create ranges", flush=True)
        status_ranges = models.StatusRanges.create_ranges(**validated_data)
        return status_ranges


# class IncidentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = models.Incident
#         fields = ['activity ','account ,','station','shift','incident_type', 'number', 'hours']










