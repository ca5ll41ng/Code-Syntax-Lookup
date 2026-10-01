---
id: "python-en-function-datetime-time-dst"
language: "python"
lang: "en"
category: "function"
name: "time.dst"
signature: "time.dst()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.time.dst"
license: "PSF"
updated: "2026-10-01"
---

# time.dst

If `.tzinfo` is `None`, returns `None`, else returns
`self.tzinfo.dst(None)`, and raises an exception if the latter doesn't return
`None`, or a `timedelta` object with magnitude less than one day.

> *Changed in 3.7*: The DST offset is not restricted to a whole number of minutes.
