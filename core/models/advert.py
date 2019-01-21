# -*- coding: utf-8 -*-
from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericRelation
from django.core.cache import caches

from hitcount.models import Hit, HitCount, HitCountMixin

from . import City


class Advert(HitCountMixin, models.Model):
    header = models.TextField(verbose_name=_('Заголовок'))

    description = models.TextField(verbose_name=_('Описание'))

    city = models.ForeignKey(
        City, verbose_name=_('Город'),
        on_delete=models.CASCADE
    )

    owner = models.ForeignKey(
        User, verbose_name=_('Владелец'),
        on_delete=models.CASCADE
    )

    hit_count_generic = GenericRelation(
        HitCount, object_id_field='object_pk',
        related_query_name='hit_count_generic_relation'
    )

    hit = GenericRelation(
        Hit, object_id_field='object_pk',
        related_query_name='hit'
    )

    class Meta:
        verbose_name = _('Объявление')
        verbose_name_plural = _('Объявления')

    def __str__(self):
        return "{}".format(self.header)

    def save(self, *args, **kwargs):
        caches['advert'].clear()
        super(Advert, self).save(*args, **kwargs)