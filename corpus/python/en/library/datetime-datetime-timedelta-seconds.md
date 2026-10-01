---
id: "python-en-function-datetime-timedelta-seconds"
language: "python"
lang: "en"
category: "function"
name: "timedelta.seconds"
directive: "attribute"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.timedelta.seconds"
license: "PSF"
updated: "2026-10-01"
---

# timedelta.seconds

Between 0 and 86,399 inclusive.

> **Caution**
>
> It is a somewhat common bug for code to unintentionally use this attribute
> when it is actually intended to get a `~timedelta.total_seconds`
> value instead:
>
> ```python
>
> >>> import datetime as dt
> >>> duration = dt.timedelta(seconds=11235813)
> >>> duration.days, duration.seconds
> (130, 3813)
> >>> duration.total_seconds()
> 11235813.0
> ```
>
