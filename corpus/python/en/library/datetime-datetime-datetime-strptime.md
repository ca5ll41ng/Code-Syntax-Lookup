---
id: "python-en-function-datetime-datetime-strptime"
language: "python"
lang: "en"
category: "function"
name: "datetime.strptime"
signature: "datetime.strptime(date_string, format)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.strptime"
license: "PSF"
updated: "2026-10-01"
---

# datetime.strptime

Return a `.datetime` corresponding to *date_string*, parsed according to
*format*.

If *format* does not contain microseconds or time zone information, this is equivalent to::

  datetime(*(time.strptime(date_string, format)[0:6]))

`ValueError` is raised if the date_string and format
can't be parsed by `time.strptime` or if it returns a value which isn't a
time tuple.  See also `strftime-strptime-behavior` and
`datetime.fromisoformat`.

> *Changed in 3.15*: If *format* specifies a day of month (``%d``) without a year, :exc:`ValueError` is raised.  This is to avoid a quadrennial leap year bug in code seeking to parse only a month and day as the default year used in absence of one in the format is not a leap year. The workaround is to always include a year in your *format*.  If parsing *date_string* values that do not have a year, explicitly add a year that is a leap year before parsing:  .. doctest::     >>> import datetime as dt    >>> date_string = "02/29"    >>> when = dt.datetime.strptime(f"{date_string};1984", "%m/%d;%Y")  # Avoids leap year bug.    >>> when.strftime("%B %d")  # doctest: +SKIP    'February 29'
