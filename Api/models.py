from django.db import models

# Create your models here.
class Product(models.Model):
    image = models.ImageField(upload_to='uploads/images',blank=False,null=False)
    name = models.CharField(max_length=255,null=False,blank=False)
    
    price = models.DecimalField(max_digits=10, decimal_places=2,blank=False,null=False)
    description = models.TextField()
    category=models.CharField(max_length=255,blank=False,null=False)

    def __str__(self):
        return self.name