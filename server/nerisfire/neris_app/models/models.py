from django.db import models

# Create your models here.
class Member(models.Model):
    first_name = models.CharField(max_length=100) # type: ignore
    last_name = models.CharField(max_length=100) # type: ignore
    date_of_birth = models.DateField() # type: ignore

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
