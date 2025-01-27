from django.db import models

# Create your models here.
class Betshow(models.Model):
    name = models.CharField(max_length=255)
    department = models.CharField(max_length=255)
    team = models.CharField(max_length=255)
    email = models.CharField(max_length=255)

class Userdetails(models.Model):
    uname = models.CharField(max_length=255)
    password = models.IntegerField()
    dateofbirth =models.DateField()
    phoneno = models.BigIntegerField()
    uemail = models.CharField(max_length=255)