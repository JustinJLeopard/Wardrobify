from django.db import models
from django.urls import reverse


class LocationVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    name = models.CharField(max_length=200)


class Hat(models.Model):
    name = models.CharField(max_length=200)
    fabric = models.CharField(max_length=200)
    style_name = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    pic_url = models.URLField()
    location = models.ForeignKey(
        LocationVO,
        related_name="hats",
        on_delete=models.CASCADE,
    )
    def __str__(self):
        return self.name
    def get_api_url(self):
        return reverse("api_show_hat", kwargs={"pk": self.pk})
    class Meta:
        ordering = ()
