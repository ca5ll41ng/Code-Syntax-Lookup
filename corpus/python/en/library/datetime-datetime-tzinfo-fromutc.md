---
id: "python-en-function-datetime-tzinfo-fromutc"
language: "python"
lang: "en"
category: "function"
name: "tzinfo.fromutc"
signature: "tzinfo.fromutc(dt)"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.tzinfo.fromutc"
license: "PSF"
updated: "2026-10-01"
---

# tzinfo.fromutc

This is called from the default `datetime.astimezone`
implementation. When called from that, `dt.tzinfo` is *self*, and *dt*'s
date and time data are to be viewed as expressing a UTC time. The purpose
of `fromutc` is to adjust the date and time data, returning an
equivalent datetime in *self*'s local time.

Most `tzinfo` subclasses should be able to inherit the default
`fromutc` implementation without problems. It's strong enough to handle
fixed-offset time zones, and time zones accounting for both standard and
daylight time, and the latter even if the DST transition times differ in
different years. An example of a time zone the default `fromutc`
implementation may not handle correctly in all cases is one where the standard
offset (from UTC) depends on the specific date and time passed, which can happen
for political reasons. The default implementations of `~.datetime.astimezone` and
`fromutc` may not produce the result you want if the result is one of the
hours straddling the moment the standard offset changes.

Skipping code for error cases, the default `fromutc` implementation acts
like::

   import datetime as dt

   def fromutc(self, when):
       # raise ValueError error if when.tzinfo is not self
       dtoff = when.utcoffset()
       dtdst = when.dst()
       # raise ValueError if dtoff is None or dtdst is None
       delta = dtoff - dtdst  # this is self's standard offset
       if delta:
           when += delta   # convert to standard local time
           dtdst = when.dst()
           # raise ValueError if dtdst is None
       if dtdst:
           return when + dtdst
       else:
           return when
