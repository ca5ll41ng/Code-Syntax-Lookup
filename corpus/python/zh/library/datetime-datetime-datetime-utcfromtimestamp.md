---
id: "python-zh-function-datetime-datetime-utcfromtimestamp"
language: "python"
lang: "zh"
category: "function"
name: "datetime.utcfromtimestamp"
signature: "datetime.utcfromtimestamp(timestamp)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.utcfromtimestamp"
license: "PSF"
updated: "2026-10-01"
---

# datetime.utcfromtimestamp

Return the UTC `.datetime` corresponding to the POSIX timestamp, with
`.tzinfo` `None`.  (The resulting object is naive.)

This may raise `OverflowError`, if the timestamp is
out of the range of values supported by the platform C :c`gmtime` function,
and `OSError` on :c`gmtime` failure.
It's common for this to be restricted to years in 1970 through 2038.

要得到一个感知型 :class:`.datetime` 对象，应调用 :meth:`fromtimestamp`::

  datetime.fromtimestamp(timestamp, timezone.utc)

On the POSIX compliant platforms, it is equivalent to the following
expression::

  datetime(1970, 1, 1, tzinfo=timezone.utc) + timedelta(seconds=timestamp)

except the latter formula always supports the full years range: between
`MINYEAR` and `MAXYEAR` inclusive.

> **Warning**
>
> Because naive `datetime` objects are treated by many `datetime` methods
> as local times, it is preferred to use aware datetimes to represent times
> in UTC. As such, the recommended way to create an object representing a
> specific timestamp in UTC is by calling
> `datetime.fromtimestamp(timestamp, tz=timezone.utc)`.
>

> *Changed in 3.3*: Raise :exc:`OverflowError` instead of :exc:`ValueError` if the timestamp is out of the range of values supported by the platform C :c:func:`gmtime` function. Raise :exc:`OSError` instead of :exc:`ValueError` on :c:func:`gmtime` failure.

> *Changed in 3.15*: Accepts any real number as *timestamp*, not only integer or float.

> *Deprecated since 3.12*: Use :meth:`datetime.fromtimestamp` with :const:`UTC` instead.
