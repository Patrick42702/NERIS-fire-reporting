from rest_framework import serializers
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

