---
id: "python-en-function-calendar-month_name"
language: "python"
lang: "en"
category: "function"
name: "month_name"
directive: "data"
module: "calendar"
source_url: "https://docs.python.org/3/library/calendar.html#calendar.month_name"
license: "PSF"
updated: "2026-10-01"
---

# month_name

A sequence that represents the months of the year in the current locale.  This
follows normal convention of January being month number 1, so it has a length of
13 and `month_name[0]` is the empty string.

    >>> import calendar
    >>> list(calendar.month_name)
    ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

> **Caution**
>
> In locales with alternative month names forms, the `month_name` sequence
> may not be suitable when a month name stands by itself and not as part of a date.
> For instance, in Greek and in many Slavic and Baltic languages, `month_name`
> will produce the month in genitive case. Use `standalone_month_name` for a form
> suitable for standalone use.
>
