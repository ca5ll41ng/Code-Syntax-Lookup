---
id: "python-en-function-os-at_statx_force_sync"
language: "python"
lang: "en"
category: "function"
name: "AT_STATX_FORCE_SYNC"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.AT_STATX_FORCE_SYNC"
license: "PSF"
updated: "2026-10-01"
---

# AT_STATX_FORCE_SYNC

A flag for the `os.statx` function.  Requests that the kernel return
up-to-date information even when doing so is expensive (for example,
requiring a round trip to the server for a file on a network filesystem).

availability:: Linux >= 4.11 with glibc >= 2.28.

> *Added in 3.15*
