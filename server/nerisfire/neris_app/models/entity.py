from django.db import models

class Dept(models.Model):
    neris_id = models.CharField(max_length=20, primary_key=True, null=False) # type: ignore


class DeptHist(models.Model):
    neris_id_dept = models.ForeignKey(Dept, on_delete=models.CASCADE, to_field='neris_id') # type: ignore
    internal_id = models.CharField(max_length=20) # type: ignore
    name = models.CharField(max_length=200, null=False) # type: ignore
    address_line_1 = models.CharField(max_length=200, null=False) # type: ignore
    address_line_2 = models.CharField(max_length=200) # type: ignore
    city = models.CharField(max_length=200, null=False) # type: ignore
    state = models.CharField(max_length=200, null=False) # type: ignore
    zip_code = models.CharField(max_length=10, null=False) # type: ignore
    mailing_address = models.CharField(max_length=200) # type: ignore
    email = models.CharField(max_length=200) # type: ignore
    website = models.CharField(max_length=200) # type: ignore

