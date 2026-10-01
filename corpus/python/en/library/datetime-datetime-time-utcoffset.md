---
id: "python-en-function-datetime-time-utcoffset"
language: "python"
lang: "en"
category: "function"
name: "time.utcoffset"
signature: "time.utcoffset()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.time.utcoffset"
license: "PSF"
updated: "2026-10-01"
---

# time.utcoffset

If `.tzinfo` is `None`, returns `None`, else returns
`self.tzinfo.utcoffset(None)`, and raises an exception if the latter doesn't
return `None` or a `timedelta` object with magnitude less than one day.

> *Changed in 3.7*: The UTC offset is not restricted to a whole number of minutes.
