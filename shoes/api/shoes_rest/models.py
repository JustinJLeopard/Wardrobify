from django.db import models
from django.urls import reverse


class BinVO(models.Model):
    import_href = models.CharField(max_length = 200, unique = True)
    name = models.CharField(max_length = 200)

class Shoe(models.Model):
    manufacturer = models.CharField(max_length=255)
    model_name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    picture_url = models.URLField()
    bin = models.ForeignKey(
        BinVO,
        related_name = "shoes",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_show_shoe", kwargs={"pk":self.pk})

    def __str__(self):
        return self.model_name

