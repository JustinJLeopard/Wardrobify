# Generated by Django 4.0.3 on 2024-01-31 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0002_hat_color_hat_fabric_hat_pic_url_hat_style_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hat',
            name='pic_url',
            field=models.URLField(),
        ),
    ]
