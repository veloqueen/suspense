# Generated by Django 3.1.7 on 2022-07-12 08:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movies',
            name='text',
        ),
        migrations.AddField(
            model_name='movies',
            name='description',
            field=models.TextField(blank=True, default='tba', verbose_name='text'),
        ),
        migrations.AddField(
            model_name='movies',
            name='director',
            field=models.CharField(default='tba', max_length=75),
        ),
        migrations.AddField(
            model_name='movies',
            name='genre',
            field=models.CharField(default='tba', max_length=75),
        ),
        migrations.AddField(
            model_name='movies',
            name='length',
            field=models.CharField(default='tba', max_length=25),
        ),
        migrations.AddField(
            model_name='movies',
            name='year',
            field=models.CharField(default='tba', max_length=4),
        ),
        migrations.AlterField(
            model_name='movies',
            name='name',
            field=models.CharField(max_length=75),
        ),
    ]