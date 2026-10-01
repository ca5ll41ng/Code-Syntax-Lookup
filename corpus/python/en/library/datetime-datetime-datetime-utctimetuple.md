---
id: "python-en-function-datetime-datetime-utctimetuple"
language: "python"
lang: "en"
category: "function"
name: "datetime.utctimetuple"
signature: "datetime.utctimetuple()"
directive: "method"
module: "datetime"
source_url: "https://docs.python.org/3/library/datetime.html#datetime.utctimetuple"
license: "PSF"
updated: "2026-10-01"
---

# datetime.utctimetuple

If `.datetime` instance `d` is naive, this is the same as
`d.timetuple()` except that `~.time.struct_time.tm_isdst` is forced to 0 regardless of what
`d.dst()` returns. DST is never in effect for a UTC time.

If `d` is aware, `d` is normalized to UTC time, by subtracting
`d.utcoffset()`, and a `time.struct_time` for the
normalized time is returned. `tm_isdst` is forced to 0. Note
that an `OverflowError` may be raised if `d.year` was
`MINYEAR` or `MAXYEAR` and UTC adjustment spills over a year
boundary.

> **Warning**
>
> Because naive `datetime` objects are treated by many `datetime` methods
> as local times, it is preferred to use aware datetimes to represent times
> in UTC; as a result, using `datetime.utctimetuple` may give misleading
> results. If you have a naive `datetime` representing UTC, use
> `datetime.replace(tzinfo=timezone.utc)` to make it aware, at which point
> you can use `.datetime.timetuple`.
>
