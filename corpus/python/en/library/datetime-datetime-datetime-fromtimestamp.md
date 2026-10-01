---
id: "python-en-function-datetime-datetime-fromtimestamp"
language: "python"
lang: "en"
category: "function"
name: "datetime.fromtimestamp"
signature: "datetime.fromtimestamp(timestamp, tz=None)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.fromtimestamp"
license: "PSF"
updated: "2026-10-01"
---

# datetime.fromtimestamp

Return the local date and time corresponding to the POSIX timestamp, such as is
returned by `time.time`. If optional argument *tz* is `None` or not
specified, the timestamp is converted to the platform's local date and time, and
the returned `.datetime` object is naive.

If *tz* is not `None`, it must be an instance of a `tzinfo` subclass, and the
timestamp is converted to *tz*’s time zone.

`fromtimestamp` may raise `OverflowError`, if the timestamp is out of
the range of values supported by the platform C :c`localtime` or
:c`gmtime` functions, and `OSError` on :c`localtime` or
:c`gmtime` failure.
It's common for this to be restricted to years in
1970 through 2038. Note that on non-POSIX systems that include leap seconds in
their notion of a timestamp, leap seconds are ignored by `fromtimestamp`,
and then it's possible to have two timestamps differing by a second that yield
identical `.datetime` objects. This method is preferred over
`utcfromtimestamp`.

> *Changed in 3.3*: Raise :exc:`OverflowError` instead of :exc:`ValueError` if the timestamp is out of the range of values supported by the platform C :c:func:`localtime` or :c:func:`gmtime` functions. Raise :exc:`OSError` instead of :exc:`ValueError` on :c:func:`localtime` or :c:func:`gmtime` failure.

> *Changed in 3.6*: :meth:`fromtimestamp` may return instances with :attr:`.fold` set to 1.

> *Changed in 3.15*: Accepts any real number as *timestamp*, not only integer or float.
