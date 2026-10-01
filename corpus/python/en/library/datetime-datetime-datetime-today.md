---
id: "python-en-function-datetime-datetime-today"
language: "python"
lang: "en"
category: "function"
name: "datetime.today"
signature: "datetime.today()"
directive: "classmethod"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.today"
license: "PSF"
updated: "2026-10-01"
---

# datetime.today

Return the current local date and time, with `.tzinfo` `None`.

Equivalent to::

  datetime.fromtimestamp(time.time())

See also `now`, `fromtimestamp`.

This method is functionally equivalent to `now`, but without a
`tz` parameter.
