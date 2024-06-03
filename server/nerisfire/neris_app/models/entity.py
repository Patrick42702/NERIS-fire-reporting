from django.db import models

class Dept(models.Model):
    description = models.TextField(blank=True, null=False) # type: ignore
    nerid_id = models.CharField(max_length=20) # type: ignore


class DeptHist(models.Model):
    neris_id_dept = models.CharField(max_length=20) # type: ignore
    internal_id = models.CharField(max_length=20) # type: ignore
    name = models.CharField(max_length=200) # type: ignore

