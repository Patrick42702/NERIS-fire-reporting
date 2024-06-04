from django.db import models

class Dept(models.Model):
    description = models.TextField(null=False) # type: ignore
    nerid_id = models.CharField(max_length=20) # type: ignore


class DeptHist(models.Model):
    neris_id_dept = models.CharField(max_length=20, null=False) # type: ignore
    internal_id = models.CharField(max_length=20) # type: ignore
    name = models.CharField(max_length=200, null=False) # type: ignore
    address_line_1 = models.CharField(max_length=200, null=False)
    address_line_2 = models.CharField(max_length=200)
    city = models.CharField(max_length=200, null=False)
    state = models.CharField(max_length=200, null=False)
    zip_code = models.CharField(max_length=10, null=False)
    mailing_address = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    website = models.CharField(max_length=200)

