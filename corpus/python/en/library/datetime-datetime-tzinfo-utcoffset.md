---
id: "python-en-function-datetime-tzinfo-utcoffset"
language: "python"
lang: "en"
category: "function"
name: "tzinfo.utcoffset"
signature: "tzinfo.utcoffset(dt)"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.tzinfo.utcoffset"
license: "PSF"
updated: "2026-10-01"
---

# tzinfo.utcoffset

Return offset of local time from UTC, as a `timedelta` object that is
positive east of UTC. If local time is west of UTC, this should be negative.

This represents the *total* offset from UTC; for example, if a
`tzinfo` object represents both time zone and DST adjustments,
`utcoffset` should return their sum. If the UTC offset isn't known,
return `None`. Else the value returned must be a `timedelta` object
strictly between `-timedelta(hours=24)` and `timedelta(hours=24)`
(the magnitude of the offset must be less than one day). Most implementations
of `utcoffset` will probably look like one of these two::

   return CONSTANT                 # fixed-offset class
   return CONSTANT + self.dst(dt)  # daylight-aware class

If `utcoffset` does not return `None`, `dst` should not return
`None` either.

The default implementation of `utcoffset` raises
`NotImplementedError`.

> *Changed in 3.7*: The UTC offset is not restricted to a whole number of minutes.
