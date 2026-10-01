---
id: "python-en-function-os-tfd_timer_cancel_on_set"
language: "python"
lang: "en"
category: "function"
name: "TFD_TIMER_CANCEL_ON_SET"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.TFD_TIMER_CANCEL_ON_SET"
license: "PSF"
updated: "2026-10-01"
---

# TFD_TIMER_CANCEL_ON_SET

A flag for the `timerfd_settime` and `timerfd_settime_ns`
functions along with `TFD_TIMER_ABSTIME`.
The timer is cancelled when the time of the underlying clock changes
discontinuously.

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
