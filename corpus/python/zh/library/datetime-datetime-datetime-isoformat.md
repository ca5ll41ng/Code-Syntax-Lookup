---
id: "python-zh-function-datetime-datetime-isoformat"
language: "python"
lang: "zh"
category: "function"
name: "datetime.isoformat"
signature: "datetime.isoformat(sep='T', timespec='auto')"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/zh-cn/3/library/datetime.html#datetime.isoformat"
license: "PSF"
updated: "2026-10-01"
---

# datetime.isoformat

返回一个以 ISO 8601 格式表示的日期和时间字符串：

- `YYYY-MM-DDTHH:MM:SS.ffffff`, if `microsecond` is not 0
- `YYYY-MM-DDTHH:MM:SS`, if `microsecond` is 0

If `utcoffset` does not return `None`, a string is
appended, giving the UTC offset:

- `YYYY-MM-DDTHH:MM:SS.ffffff+HH:MM[:SS[.ffffff]]`, if `microsecond`
  is not 0
- `YYYY-MM-DDTHH:MM:SS+HH:MM[:SS[.ffffff]]`,  if `microsecond` is 0

示例::

    >>> import datetime as dt
    >>> dt.datetime(2019, 5, 18, 15, 17, 8, 132263).isoformat()
    '2019-05-18T15:17:08.132263'
    >>> dt.datetime(2019, 5, 18, 15, 17, tzinfo=dt.timezone.utc).isoformat()
    '2019-05-18T15:17:00+00:00'

The optional argument *sep* (default `'T'`) is a one-character separator,
placed between the date and time portions of the result. For example::

   >>> import datetime as dt
   >>> class TZ(dt.tzinfo):
   ...     """A time zone with an arbitrary, constant -06:39 offset."""
   ...     def utcoffset(self, when):
   ...         return dt.timedelta(hours=-6, minutes=-39)
   ...
   >>> dt.datetime(2002, 12, 25, tzinfo=TZ()).isoformat(' ')
   '2002-12-25 00:00:00-06:39'
   >>> dt.datetime(2009, 11, 27, microsecond=100, tzinfo=TZ()).isoformat()
   '2009-11-27T00:00:00.000100-06:39'

The optional argument *timespec* specifies the number of additional
components of the time to include (the default is `'auto'`).
It can be one of the following:

- `'auto'`: Same as `'seconds'` if `microsecond` is 0,
  same as `'microseconds'` otherwise.
- `'hours'`: Include the `hour` in the two-digit `HH` format.
- `'minutes'`: Include `hour` and `minute` in `HH:MM` format.
- `'seconds'`: Include `hour`, `minute`, and `second`
  in `HH:MM:SS` format.
- `'milliseconds'`: Include full time, but truncate fractional second
  part to milliseconds. `HH:MM:SS.sss` format.
- `'microseconds'`: Include full time in `HH:MM:SS.ffffff` format.

> **Note**
>
> 排除掉的时间部分将被截断，而不是被舍入。
>

对于无效的 *timespec* 参数将引发 :exc:`ValueError`::

   >>> import datetime as dt
   >>> dt.datetime.now().isoformat(timespec='minutes')   # doctest: +SKIP
   '2002-12-25T00:00'
   >>> my_datetime = dt.datetime(2015, 1, 1, 12, 30, 59, 0)
   >>> my_datetime.isoformat(timespec='microseconds')
   '2015-01-01T12:30:59.000000'

> *Changed in 3.6*: Added the *timespec* parameter.
