---
id: "python-en-function-datetime-time-isoformat"
language: "python"
lang: "en"
category: "function"
name: "time.isoformat"
signature: "time.isoformat(timespec='auto')"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.time.isoformat"
license: "PSF"
updated: "2026-10-01"
---

# time.isoformat

Return a string representing the time in ISO 8601 format, one of:

- `HH:MM:SS.ffffff`, if `microsecond` is not 0
- `HH:MM:SS`, if `microsecond` is 0
- `HH:MM:SS.ffffff+HH:MM[:SS[.ffffff]]`, if `utcoffset` does not return `None`
- `HH:MM:SS+HH:MM[:SS[.ffffff]]`, if `microsecond` is 0 and `utcoffset` does not return `None`

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
> Excluded time components are truncated, not rounded.
>

`ValueError` will be raised on an invalid *timespec* argument.

Example::

   >>> import datetime as dt
   >>> dt.time(hour=12, minute=34, second=56, microsecond=123456).isoformat(timespec='minutes')
   '12:34'
   >>> my_time = dt.time(hour=12, minute=34, second=56, microsecond=0)
   >>> my_time.isoformat(timespec='microseconds')
   '12:34:56.000000'
   >>> my_time.isoformat(timespec='auto')
   '12:34:56'

> *Changed in 3.6*: Added the *timespec* parameter.
