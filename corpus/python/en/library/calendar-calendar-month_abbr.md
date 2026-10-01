---
id: "python-en-function-calendar-month_abbr"
language: "python"
lang: "en"
category: "function"
name: "month_abbr"
directive: "data"
module: "calendar"
source_url: "https://docs.python.org/3/library/calendar.html#calendar.month_abbr"
license: "PSF"
updated: "2026-10-01"
---

# month_abbr

A sequence that represents the abbreviated months of the year in the current
locale.  This follows normal convention of January being month number 1, so it
has a length of 13 and  `month_abbr[0]` is the empty string.

    >>> import calendar
    >>> list(calendar.month_abbr)
    ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

> **Caution**
>
> In locales with alternative month names forms, the `month_abbr` sequence
> may not be suitable when a month name stands by itself and not as part of a date.
> Use `standalone_month_abbr` for a form suitable for standalone use.
>
