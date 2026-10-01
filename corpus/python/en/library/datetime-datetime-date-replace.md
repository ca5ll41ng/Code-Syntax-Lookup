---
id: "python-en-function-datetime-date-replace"
language: "python"
lang: "en"
category: "function"
name: "date.replace"
signature: "date.replace(year=self.year, month=self.month, day=self.day)"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.replace"
license: "PSF"
updated: "2026-10-01"
---

# date.replace

Return a new `date` object with the same values, but with specified
parameters updated.

Example::

    >>> import datetime as dt
    >>> d = dt.date(2002, 12, 31)
    >>> d.replace(day=26)
    datetime.date(2002, 12, 26)

The generic function `copy.replace` also supports `date`
objects.
