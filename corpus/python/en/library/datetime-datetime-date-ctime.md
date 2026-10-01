---
id: "python-en-function-datetime-date-ctime"
language: "python"
lang: "en"
category: "function"
name: "date.ctime"
signature: "date.ctime()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.ctime"
license: "PSF"
updated: "2026-10-01"
---

# date.ctime

Return a string representing the date::

    >>> import datetime as dt
    >>> dt.date(2002, 12, 4).ctime()
    'Wed Dec  4 00:00:00 2002'

`d.ctime()` is equivalent to::

  time.ctime(time.mktime(d.timetuple()))

on platforms where the native C
:c`ctime` function (which `time.ctime` invokes, but which
`date.ctime` does not invoke) conforms to the C standard.
