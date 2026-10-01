---
id: "python-en-function-datetime-datetime-fromisoformat"
language: "python"
lang: "en"
category: "function"
name: "datetime.fromisoformat"
signature: "datetime.fromisoformat(date_string)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.fromisoformat"
license: "PSF"
updated: "2026-10-01"
---

# datetime.fromisoformat

Return a `.datetime` corresponding to a *date_string* in any valid
ISO 8601 format, with the following exceptions:

1. Time zone offsets may have fractional seconds.
2. The `T` separator may be replaced by any single unicode character.
3. Fractional hours and minutes are not supported.
4. Reduced precision dates are not currently supported (`YYYY-MM`,
   `YYYY`).
5. Extended date representations are not currently supported
   (`±YYYYYY-MM-DD`).
6. Ordinal dates are not currently supported (`YYYY-OOO`).

Examples::

    >>> import datetime as dt
    >>> dt.datetime.fromisoformat('2011-11-04')
    datetime.datetime(2011, 11, 4, 0, 0)
    >>> dt.datetime.fromisoformat('20111104')
    datetime.datetime(2011, 11, 4, 0, 0)
    >>> dt.datetime.fromisoformat('2011-11-04T00:05:23')
    datetime.datetime(2011, 11, 4, 0, 5, 23)
    >>> dt.datetime.fromisoformat('2011-11-04T00:05:23Z')
    datetime.datetime(2011, 11, 4, 0, 5, 23, tzinfo=datetime.timezone.utc)
    >>> dt.datetime.fromisoformat('20111104T000523')
    datetime.datetime(2011, 11, 4, 0, 5, 23)
    >>> dt.datetime.fromisoformat('2011-W01-2T00:05:23.283')
    datetime.datetime(2011, 1, 4, 0, 5, 23, 283000)
    >>> dt.datetime.fromisoformat('2011-11-04 00:05:23.283')
    datetime.datetime(2011, 11, 4, 0, 5, 23, 283000)
    >>> dt.datetime.fromisoformat('2011-11-04 00:05:23.283+00:00')
    datetime.datetime(2011, 11, 4, 0, 5, 23, 283000, tzinfo=datetime.timezone.utc)
    >>> dt.datetime.fromisoformat('2011-11-04T00:05:23+04:00')   # doctest: +NORMALIZE_WHITESPACE
    datetime.datetime(2011, 11, 4, 0, 5, 23,
        tzinfo=datetime.timezone(datetime.timedelta(seconds=14400)))

> *Added in 3.7*

> *Changed in 3.11*: Previously, this method only supported formats that could be emitted by :meth:`date.isoformat` or :meth:`datetime.isoformat`.
