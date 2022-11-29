# Generated by Django 4.0.6 on 2022-11-29 11:40

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0004_alter_customer__id_alter_customer_address_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customer',
            name='_id',
            field=models.OneToOneField(default=0, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='customer',
            name='address',
            field=models.CharField(default='first street', max_length=25),
        ),
        migrations.AlterField(
            model_name='customer',
            name='city',
            field=models.CharField(default='haifa', max_length=25),
        ),
        migrations.AlterField(
            model_name='customer',
            name='country',
            field=models.CharField(default='israel', max_length=25),
        ),
        migrations.AlterField(
            model_name='customer',
            name='firstName',
            field=models.CharField(default='noa', max_length=30),
        ),
        migrations.AlterField(
            model_name='customer',
            name='lastname',
            field=models.CharField(default='ruderman', max_length=30),
        ),
        migrations.AlterField(
            model_name='customer',
            name='postal_code',
            field=models.IntegerField(default=20100),
        ),
    ]
