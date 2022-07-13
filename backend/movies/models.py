from django.db import models


class Movies(models.Model):
    name = models.CharField(max_length=75)
    director = models.CharField(max_length=75, default='tba')
    genre = models.CharField(max_length=75, default='tba')
    length = models.CharField(max_length=25, default='tba')
    year = models.CharField(max_length=4, default='tba')
    description = models.TextField(verbose_name="text", blank=True, default='tba')
    #avatar = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, blank=True, null=True,)

    def __str__(self):
        return self.description