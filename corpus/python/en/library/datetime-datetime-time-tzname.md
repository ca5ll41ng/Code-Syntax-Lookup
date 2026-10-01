---
id: "python-en-function-datetime-time-tzname"
language: "python"
lang: "en"
category: "function"
name: "time.tzname"
signature: "time.tzname()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.time.tzname"
license: "PSF"
updated: "2026-10-01"
---

# time.tzname

If `.tzinfo` is `None`, returns `None`, else returns
`self.tzinfo.tzname(None)`, or raises an exception if the latter doesn't
return `None` or a string object.
