---
id: "python-en-function-datetime-datetime-timestamp"
language: "python"
lang: "en"
category: "function"
name: "datetime.timestamp"
signature: "datetime.timestamp()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.timestamp"
license: "PSF"
updated: "2026-10-01"
---

# datetime.timestamp

Return POSIX timestamp corresponding to the `.datetime`
instance. The return value is a `float` similar to that
returned by `time.time`.

Naive `.datetime` instances are assumed to represent local
time and this method relies on platform C functions to perform
the conversion. Since `datetime` supports a wider range of
values than the platform C functions on many platforms, this
method may raise `OverflowError` or `OSError` for times
far in the past or far in the future.

For aware `.datetime` instances, the return value is computed
as::

   (dt - datetime(1970, 1, 1, tzinfo=timezone.utc)).total_seconds()

> **Note**
>
> There is no method to obtain the POSIX timestamp directly from a
> naive `.datetime` instance representing UTC time. If your
> application uses this convention and your system time zone is not
> set to UTC, you can obtain the POSIX timestamp by supplying
> `tzinfo=timezone.utc`::
>
>    timestamp = dt.replace(tzinfo=timezone.utc).timestamp()
>
> or by calculating the timestamp directly::
>
>    timestamp = (dt - datetime(1970, 1, 1)) / timedelta(seconds=1)
>

> *Added in 3.3*

> *Changed in 3.6*: The :meth:`timestamp` method uses the :attr:`.fold` attribute to disambiguate the times during a repeated interval.

> *Changed in 3.6*: This method no longer relies on the platform C :c:func:`mktime` function to perform conversions.
