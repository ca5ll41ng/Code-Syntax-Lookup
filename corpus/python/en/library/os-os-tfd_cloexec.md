---
id: "python-en-function-os-tfd_cloexec"
language: "python"
lang: "en"
category: "function"
name: "TFD_CLOEXEC"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.TFD_CLOEXEC"
license: "PSF"
updated: "2026-10-01"
---

# TFD_CLOEXEC

A flag for the `timerfd_create` function,
If `TFD_CLOEXEC` is set as a flag, set close-on-exec flag for new file
descriptor.

availability:: Linux >= 2.6.27 with glibc >= 2.8

> *Added in 3.13*
