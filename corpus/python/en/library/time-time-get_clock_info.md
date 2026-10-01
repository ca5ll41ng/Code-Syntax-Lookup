---
id: "python-en-function-time-get_clock_info"
language: "python"
lang: "en"
category: "function"
name: "get_clock_info"
signature: "get_clock_info(name, /)"
directive: "function"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.get_clock_info"
license: "PSF"
updated: "2026-10-01"
---

# get_clock_info

Get information on the specified clock as a namespace object.
Supported clock names and the corresponding functions to read their value
are:

* `'monotonic'`: `time.monotonic`
* `'perf_counter'`: `time.perf_counter`
* `'process_time'`: `time.process_time`
* `'thread_time'`: `time.thread_time`
* `'time'`: `time.time`

The result has the following attributes:

- *adjustable*: `True` if the clock can be set to jump forward or backward
  in time, `False` otherwise. Does not refer to gradual NTP rate adjustments.
- *implementation*: The name of the underlying C function used to get
  the clock value.  Refer to `time-clock-id-constants` for possible values.
- *monotonic*: `True` if the clock cannot go backward,
  `False` otherwise
- *resolution*: The resolution of the clock in seconds (`float`)

> *Added in 3.3*
