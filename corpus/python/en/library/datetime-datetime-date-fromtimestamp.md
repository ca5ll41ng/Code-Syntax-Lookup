---
id: "python-en-function-datetime-date-fromtimestamp"
language: "python"
lang: "en"
category: "function"
name: "date.fromtimestamp"
signature: "date.fromtimestamp(timestamp)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.fromtimestamp"
license: "PSF"
updated: "2026-10-01"
---

# date.fromtimestamp

Return the local date corresponding to the POSIX *timestamp*, such as is
returned by `time.time`.

This may raise `OverflowError`, if the timestamp is out
of the range of values supported by the platform C :c`localtime`
function, and `OSError` on :c`localtime` failure.
It's common for this to be restricted to years from 1970 through 2038. Note
that on non-POSIX systems that include leap seconds in their notion of a
timestamp, leap seconds are ignored by `fromtimestamp`.

> *Changed in 3.3*: Raise :exc:`OverflowError` instead of :exc:`ValueError` if the timestamp is out of the range of values supported by the platform C :c:func:`localtime` function. Raise :exc:`OSError` instead of :exc:`ValueError` on :c:func:`localtime` failure.

> *Changed in 3.15*: Accepts any real number as *timestamp*, not only integer or float.
