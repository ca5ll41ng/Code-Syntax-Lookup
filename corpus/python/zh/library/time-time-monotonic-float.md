---
id: "python-zh-function-time-monotonic-float"
language: "python"
lang: "zh"
category: "function"
name: "monotonic() -> float"
directive: "function"
module: "time"
source_url: "https://docs.python.org/zh-cn/3/library/time.html#time.monotonic() -> float"
license: "PSF"
updated: "2026-10-01"
---

# monotonic() -> float

Return the value (in fractional seconds) of a monotonic clock, i.e. a clock
that cannot go backwards.  The clock is not affected by system clock updates.
The reference point of the returned value is undefined, so that only the
difference between the results of two calls is valid.

时钟：

* On Windows, call `QueryPerformanceCounter()` and
  `QueryPerformanceFrequency()`.
* On macOS, call `mach_absolute_time()` and `mach_timebase_info()`.
* On HP-UX, call `gethrtime()`.
* Call `clock_gettime(CLOCK_HIGHRES)` if available.
* Otherwise, call `clock_gettime(CLOCK_MONOTONIC)`.

Use `monotonic_ns` to avoid the precision loss caused by the
`float` type.

> *Added in 3.3*

> *Changed in 3.5*: The function is now always available and the clock is now the same for all processes.

> *Changed in 3.10*: On macOS, the clock is now the same for all processes.
