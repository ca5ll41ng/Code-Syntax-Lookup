---
id: "python-en-function-time-perf_counter-float"
language: "python"
lang: "en"
category: "function"
name: "perf_counter() -> float"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.perf_counter() -> float"
license: "PSF"
updated: "2026-10-01"
---

# perf_counter() -> float

Return the value (in fractional seconds) of a performance counter, i.e. a
clock with the highest available resolution to measure a short duration.  It
does include time elapsed during sleep. The clock is the same for all
processes. The reference
point of the returned value is undefined, so that only the difference between
the results of two calls is valid.

impl-detail::

Use `perf_counter_ns` to avoid the precision loss caused by the
`float` type.

> *Added in 3.3*

> *Changed in 3.10*: On Windows, the clock is now the same for all processes.

> *Changed in 3.13*: Use the same clock as :func:`time.monotonic`.
