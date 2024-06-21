from django.db import models
from django.contrib.auth.models import User
import uuid

#this is a test example
class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

class Organization(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    dept_name = models.CharField(max_length=255, null=False)
    location = models.CharField(max_length=255)
    fdid = models.IntegerField(null=False)
    verified = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.dept_name

# class Activity(models.Model):
#     activity_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     activity_type = models.CharField(max_length=255, null=False)
#     activity_date = models.DateTimeField(null=False)
#
#     def __str__(self):
#         return self.activity_type
#
#     class Meta:
#         abstract = True
#
# class Incident(models.Model):
#     activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
#     account = models.CharField(max_length=255)
#     station = models.IntegerField()
#     shift = models.CharField(max_length=255) # Assumed CharField
#     alarm_dt = models.CharField(max_length=255) # Assumed CharField
#     incident_type = models.CharField(max_length=255) # Assumed CharField
#     number = models.IntegerField() # Not sure if other paramaters
#     hours = models.DecimalField(max_digits=100, decimal_places=2)
#
#     def __str__(self):
#         return str(self.incident_type) + ":" + str(self.activity.activity_id)
#
# class Event(models.Model):
#     activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
#     account = models.CharField(max_length=255)
#     start_time = models.DateTimeField(null=False)
#     hours = models.DecimalField(max_digits=100, decimal_places=2)
#     name = models.CharField(max_length=255, null=False)
#     category = models.CharField(max_length=255)
#     event_type = models.CharField(max_length=255)
#
#     def __str__(self):
#         return str(self.name) + ":" + str(self.activity.activity_id)
#
# class Class(models.Model):
#     activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
#     account = models.CharField(max_length=255)
#     station = models.IntegerField()
#     start_time = models.DateTimeField(null=False)
#     name = models.CharField(max_length=255, null=False)
#     category = models.CharField(max_length=255)
#     train_cat = models.IntegerField()
#     train_code = models.CharField(max_length=255)
#     hours = models.DecimalField(max_digits=100, decimal_places=2)
#
#     def __str__(self):
#         return str(self.name) + ":" + str(self.activity.activity_id)
#
# class Member(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     # is_superuser = models.BooleanField(default=false, null=false)
#
