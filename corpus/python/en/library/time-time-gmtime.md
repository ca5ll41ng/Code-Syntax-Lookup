---
id: "python-en-function-time-gmtime"
language: "python"
lang: "en"
category: "function"
name: "gmtime"
signature: "gmtime(seconds=None, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.gmtime"
license: "PSF"
updated: "2026-10-01"
---

# gmtime

Convert a time expressed in seconds since the epoch_ to a `struct_time` in
UTC in which the dst flag is always zero.  If *seconds* is not provided or
`None`, the current time as returned by `.time` is used.  Fractions
of a second are ignored.  See above for a description of the
`struct_time` object. See `calendar.timegm` for the inverse of this
function.

> *Changed in 3.15*: Accepts any real number, not only integer or float.
