---
id: "python-en-function-time-process_time-float"
language: "python"
lang: "en"
category: "function"
name: "process_time() -> float"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.process_time() -> float"
license: "PSF"
updated: "2026-10-01"
---

# process_time() -> float

Return the value (in fractional seconds) of the sum of the system and user
CPU time of the current process.  It does not include time elapsed during
sleep.  It is process-wide by definition.  The reference point of the
returned value is undefined, so that only the difference between the results
of two calls is valid.

Use `process_time_ns` to avoid the precision loss caused by the
`float` type.

> *Added in 3.3*
