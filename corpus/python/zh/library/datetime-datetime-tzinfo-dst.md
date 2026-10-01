---
id: "python-zh-function-datetime-tzinfo-dst"
language: "python"
lang: "zh"
category: "function"
name: "tzinfo.dst"
signature: "tzinfo.dst(dt)"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.tzinfo.dst"
license: "PSF"
updated: "2026-10-01"
---

# tzinfo.dst

Return the daylight saving time (DST) adjustment, as a `timedelta`
object or
`None` if DST information isn't known.

Return `timedelta(0)` if DST is not in effect.
If DST is in effect, return the offset as a `timedelta` object
(see `utcoffset` for details). Note that DST offset, if applicable, has
already been added to the UTC offset returned by `utcoffset`, so there's
no need to consult `dst` unless you're interested in obtaining DST info
separately. For example, `datetime.timetuple` calls its `~.datetime.tzinfo`
attribute's `dst` method to determine how the `~time.struct_time.tm_isdst` flag
should be set, and `tzinfo.fromutc` calls `dst` to account for
DST changes when crossing time zones.

An instance *tz* of a `tzinfo` subclass that models both standard and
daylight times must be consistent in this sense:

``tz.utcoffset(dt) - tz.dst(dt)``

must return the same result for every `.datetime` *dt* with `dt.tzinfo ==
tz`. For sane `tzinfo` subclasses, this expression yields the time
zone's "standard offset", which should not depend on the date or the time, but
only on geographic location. The implementation of `datetime.astimezone`
relies on this, but cannot detect violations; it's the programmer's
responsibility to ensure it. If a `tzinfo` subclass cannot guarantee
this, it may be able to override the default implementation of
`tzinfo.fromutc` to work correctly with `~.datetime.astimezone` regardless.

大多数 :meth:`dst` 的实现可能会如以下两者之一::

   import datetime as dt

   def dst(self, when):
       # a fixed-offset class:  doesn't account for DST
       return dt.timedelta(0)

或者::

   import datetime as dt

   def dst(self, when):
       # Code to set dston and dstoff to the time zone's DST
       # transition times based on the input when.year, and expressed
       # in standard local time.

       if dston <= when.replace(tzinfo=None) < dstoff:
           return dt.timedelta(hours=1)
       else:
           return dt.timedelta(0)

默认的 :meth:`dst` 实现会引发 :exc:`NotImplementedError`。

> *Changed in 3.7*: The DST offset is not restricted to a whole number of minutes.
