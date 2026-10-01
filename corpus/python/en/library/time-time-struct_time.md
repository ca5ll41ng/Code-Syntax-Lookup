---
id: "python-en-function-time-struct_time"
language: "python"
lang: "en"
category: "function"
name: "struct_time"
directive: "class"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.struct_time"
license: "PSF"
updated: "2026-10-01"
---

# struct_time

The type of the time value sequence returned by `gmtime`,
`localtime`, and `strptime`.  It is an object with a `named
tuple` interface: values can be accessed by index and by attribute name.  The
following values are present:

list-table::

Note that unlike the C structure, the month value is a range of [1, 12], not
[0, 11].

In calls to `mktime`, `tm_isdst` may be set to 1 when daylight
savings time is in effect, and 0 when it is not.  A value of -1 indicates that
this is not known, and will usually result in the correct state being filled in.

When a tuple with an incorrect length is passed to a function expecting a
`struct_time`, or having elements of the wrong type, a
`TypeError` is raised.
