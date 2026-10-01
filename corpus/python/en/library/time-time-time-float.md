---
id: "python-en-function-time-time-float"
language: "python"
lang: "en"
category: "function"
name: "time() -> float"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.time() -> float"
license: "PSF"
updated: "2026-10-01"
---

# time() -> float

Return the time in seconds since the epoch_ as a floating-point
number. The handling of `leap seconds`_ is platform dependent.
On Windows and most Unix systems, the leap seconds are not counted towards
the time in seconds since the epoch_. This is commonly referred to as `Unix
time <https://en.wikipedia.org/wiki/Unix_time>`_.

Note that even though the time is always returned as a floating-point
number, not all systems provide time with a better precision than 1 second.
While this function normally returns non-decreasing values, it can return a
lower value than a previous call if the system clock has been set back
between the two calls.

The number returned by `.time` may be converted into a more common
time format (i.e. year, month, day, hour, etc...) in UTC by passing it to
`gmtime` function or in local time by passing it to the
`localtime` function. In both cases a
`struct_time` object is returned, from which the components
of the calendar date may be accessed as attributes.

Clock:

* On Windows, call `GetSystemTimePreciseAsFileTime()`.
* Call `clock_gettime(CLOCK_REALTIME)` if available.
* Otherwise, call `gettimeofday()`.

Use `time_ns` to avoid the precision loss caused by the `float`
type.
