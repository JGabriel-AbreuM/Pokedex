# Generated by Django 3.1.1 on 2022-01-21 11:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='controleotp',
            name='email',
            field=models.EmailField(max_length=254, unique=True),
        ),
    ]
