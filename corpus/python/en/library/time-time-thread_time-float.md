---
id: "python-en-function-time-thread_time-float"
language: "python"
lang: "en"
category: "function"
name: "thread_time() -> float"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.thread_time() -> float"
license: "PSF"
updated: "2026-10-01"
---

# thread_time() -> float

Return the value (in fractional seconds) of the sum of the system and user
CPU time of the current thread.  It does not include time elapsed during
sleep.  It is thread-specific by definition.  The reference point of the
returned value is undefined, so that only the difference between the results
of two calls in the same thread is valid.

Use `thread_time_ns` to avoid the precision loss caused by the
`float` type.

availability::  Linux, Unix, Windows.

> *Added in 3.7*
