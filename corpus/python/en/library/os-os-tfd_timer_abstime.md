---
id: "python-en-function-os-tfd_timer_abstime"
language: "python"
lang: "en"
category: "function"
name: "TFD_TIMER_ABSTIME"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.TFD_TIMER_ABSTIME"
license: "PSF"
updated: "2026-10-01"
---

# TFD_TIMER_ABSTIME

A flag for the `timerfd_settime` and `timerfd_settime_ns` functions.
If this flag is set, *initial* is interpreted as an absolute value on the
timer's clock (in UTC seconds or nanoseconds since the Unix Epoch).

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
