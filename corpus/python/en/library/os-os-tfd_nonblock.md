---
id: "python-en-function-os-tfd_nonblock"
language: "python"
lang: "en"
category: "function"
name: "TFD_NONBLOCK"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.TFD_NONBLOCK"
license: "PSF"
updated: "2026-10-01"
---

# TFD_NONBLOCK

A flag for the `timerfd_create` function,
which sets the `O_NONBLOCK` status flag for the new timer file
descriptor. If `TFD_NONBLOCK` is not set as a flag, `read` blocks.

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
