# from django.db import models
#
# class Incident(models.Model):
#   # description = models.TextField(null=False)
#   incident_id = models.CharField(max_length=20, primary_key=True, null=False)
#   incident_number =  models.ForeignKey(IncidentHist, on_delete=models.CASCADE, to_field='incident_number')
#
# class IncidentHist(models.Model):
#   incident_number = models.ForeignKey(Incident, on_delete=models.CASCADE, to_field='incident')
#
#
