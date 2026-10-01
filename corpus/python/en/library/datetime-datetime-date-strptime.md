---
id: "python-en-function-datetime-date-strptime"
language: "python"
lang: "en"
category: "function"
name: "date.strptime"
signature: "date.strptime(date_string, format)"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.date.strptime"
license: "PSF"
updated: "2026-10-01"
---

# date.strptime

Return a `.date` corresponding to *date_string*, parsed according to
*format*. This is equivalent to::

  date(*(time.strptime(date_string, format)[0:3]))

`ValueError` is raised if the date_string and format
can't be parsed by `time.strptime` or if it returns a value which isn't a
time tuple.  See also `strftime-strptime-behavior` and
`date.fromisoformat`.

> **Note**
>
> If *format* specifies a day of month (`%d`) without a year,
> `ValueError` is raised.  This is to avoid a quadrennial
> leap year bug in code seeking to parse only a month and day as the
> default year used in absence of one in the format is not a leap year.
> The workaround is to always include a year in your *format*.  If parsing
> *date_string* values that do not have a year, explicitly add a year that
> is a leap year before parsing:
>
> ```python
>
> >>> import datetime as dt
> >>> date_string = "02/29"
> >>> when = dt.date.strptime(f"{date_string};1984", "%m/%d;%Y")  # Avoids leap year bug.
> >>> when.strftime("%B %d")  # doctest: +SKIP
> 'February 29'
> ```
>

> *Added in 3.14*
