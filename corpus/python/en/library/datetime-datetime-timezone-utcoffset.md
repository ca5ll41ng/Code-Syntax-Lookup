---
id: "python-en-function-datetime-timezone-utcoffset"
language: "python"
lang: "en"
category: "function"
name: "timezone.utcoffset"
signature: "timezone.utcoffset(dt)"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.timezone.utcoffset"
license: "PSF"
updated: "2026-10-01"
---

# timezone.utcoffset

Return the fixed value specified when the `timezone` instance is
constructed.

The *dt* argument is ignored. The return value is a `timedelta`
instance equal to the difference between the local time and UTC.

> *Changed in 3.7*: The UTC offset is not restricted to a whole number of minutes.
