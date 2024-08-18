from rest_framework import serializers
from base import models


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Event
        fields = ["activity", "account", "start_time",
                  "hours", "name", "category", "event_type"]


class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Incident
        fields = ["activity", "account", "start_time", "hours", "name",
                  "station", "shift", "alarm_dt", "incident_type", "number"]


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
