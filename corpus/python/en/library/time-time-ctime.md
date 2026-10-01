---
id: "python-en-function-time-ctime"
language: "python"
lang: "en"
category: "function"
name: "ctime"
signature: "ctime(seconds=None, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.ctime"
license: "PSF"
updated: "2026-10-01"
---

# ctime

Convert a time expressed in seconds since the epoch_ to a string of a form:
`'Sun Jun 20 23:21:05 1993'` representing local time. The day field
is two characters long and is space padded if the day is a single digit,
for example: `'Wed Jun  9 04:26:40 1993'`.

If *seconds* is not provided or `None`, the current time as
returned by `.time` is used. `ctime(seconds)` is equivalent to
`asctime(localtime(seconds))`. Locale information is not used by
`ctime`.

> *Changed in 3.15*: Accepts any real number, not only integer or float.
