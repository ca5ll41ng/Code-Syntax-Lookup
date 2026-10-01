---
id: "python-en-function-time-clock_boottime"
language: "python"
lang: "en"
category: "function"
name: "CLOCK_BOOTTIME"
directive: "data"
module: "time"
source_url: "https://docs.python.org/3/library/time.html#time.CLOCK_BOOTTIME"
license: "PSF"
updated: "2026-10-01"
---

# CLOCK_BOOTTIME

Identical to `CLOCK_MONOTONIC`, except it also includes any time that
the system is suspended.

This allows applications to get a suspend-aware monotonic  clock  without
having to deal with the complications of `CLOCK_REALTIME`, which may
have  discontinuities if the time is changed using `settimeofday()` or
similar.

availability:: Linux >= 2.6.39.

> *Added in 3.7*
