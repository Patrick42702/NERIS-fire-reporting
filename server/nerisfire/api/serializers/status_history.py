from rest_framework import serializers
from base import models
import logging
logger = logging.getLogger('api')

class StatusHistorySeralizer(serializers.ModelSerializer):
    class Meta:
        model = models.StatusHistory
        fields = ["id", "user", "start_date", "end_date", "status", "duration"]
        ordering = ['id']
        ordering_fields = ['id']  # Fields that can be ordered
        extra_kwargs = {
            'duration': {"required": False},
            'end_date': {"required": False},
        }

    def create(self, validated_data):
        logger.debug("this is calling the create ranges method")
        status_history = models.StatusHistory.create_ranges(**validated_data)
        return status_history
