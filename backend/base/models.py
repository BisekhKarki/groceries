from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Groceries(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    image=models.ImageField(upload_to="pictures")