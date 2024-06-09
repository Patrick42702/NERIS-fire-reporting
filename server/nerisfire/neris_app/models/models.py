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
import uuid

class Organization(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    dept_name = models.CharField(max_length=255, null=False)
    location = models.CharField(max_length=255)
    fdid = models.IntegerField(null=False)
    verified = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.dept_name

    