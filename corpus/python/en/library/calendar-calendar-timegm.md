---
id: "python-en-function-calendar-timegm"
language: "python"
lang: "en"
category: "function"
name: "timegm"
signature: "timegm(tuple)"
directive: "function"
module: "calendar"
source_url: "https://docs.python.org/3/library/calendar.html#calendar.timegm"
license: "PSF"
updated: "2026-10-01"
---

# timegm

An unrelated but handy function that takes a time tuple such as returned by
the `~time.gmtime` function in the `time` module, and returns the
corresponding Unix timestamp value, assuming an epoch of 1970, and the POSIX
encoding.  In fact, `time.gmtime` and `timegm` are each other's
inverse.
