# # from django.db import models
#
# # # Create your models here.
# # class Member(models.Model):
# #     first_name = models.CharField(max_length=100) # type: ignore
# #     last_name = models.CharField(max_length=100) # type: ignore
# #     date_of_birth = models.DateField() # type: ignore
#
# #     def __str__(self):
# #         return f"{self.first_name} {self.last_name}"
#
# # myapp/models.py
#
# from django.db import models
# from django.utils import timezone
#
# class Developer(models.Model):
#     url = models.CharField(max_length=255, primary_key=True, default='')
#     username = models.CharField(max_length=255, default='')
#     password = models.CharField(max_length=255, default='')
#     email = models.EmailField(default='')
#     created_at = models.DateTimeField(default=timezone.now)
#
# class CompanyAdmin(models.Model):
#     url = models.CharField(max_length=255, primary_key=True, default='')
#     username = models.CharField(max_length=255, default='')
#     password = models.CharField(max_length=255, default='')
#     email = models.EmailField(default='')
#     created_at = models.DateTimeField(default=timezone.now)
#
# class Moderator(models.Model):
#     url = models.CharField(max_length=255, primary_key=True, default='')
#     username = models.CharField(max_length=255, default='')
#     password = models.CharField(max_length=255, default='')
#     email = models.EmailField(default='')
#     created_at = models.DateTimeField(default=timezone.now)
#

from django.db import models
from django.contrib.auth.models import User
import uuid

class Organization(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    dept_name = models.CharField(max_length=255, null=False)
    location = models.CharField(max_length=255)
    fdid = models.IntegerField(null=False)
    verified = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.dept_name

class Activity(models.Model):
    activity_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    activity_type = models.CharField(max_length=255, null=False)
    activity_date = models.DateTimeField(null=False)
    
    def __str__(self):
        return self.activity_type
    
    class Meta:
        abstract = True
    
class Incident(models.Model):
    activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
    account = models.CharField(max_length=255)
    station = models.IntegerField()
    shift = models.CharField(max_length=255) # Assumed CharField
    alarm_dt = models.CharField(max_length=255) # Assumed CharField
    incident_type = models.CharField(max_length=255) # Assumed CharField
    number = models.IntegerField() # Not sure if other paramaters
    hours = models.DecimalField(max_digits=100, decimal_places=2)
    
    def __str__(self):
        return self
    
class Event(models.Model):
    activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
    account = models.CharField(max_length=255)
    start_time = models.DateTimeField(null=False)
    hours = models.DecimalField(max_digits=100, decimal_places=2)
    name = models.CharField(max_length=255, null=False)
    category = models.CharField(max_length=255)
    event_type = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name

class Class(models.Model):
    activity = models.OneToOneField(Activity, on_delete=models.CASCADE)
    account = models.CharField(max_length=255)
    station = models.IntegerField()
    start_time = models.DateTimeField(null=False)
    name = models.CharField(max_length=255, null=False)
    category = models.CharField(max_length=255)
    train_cat = models.IntegerField()
    train_code = models.CharField(max_length=255)
    hours = models.DecimalField(max_digits=100, decimal_places=2)
    
    def __str__(self):
        return self.name
    
class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    # is_superuser = models.BooleanField(default=false, null=false)
    