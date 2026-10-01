---
id: "python-en-function-os-at_statx_sync_as_stat"
language: "python"
lang: "en"
category: "function"
name: "AT_STATX_SYNC_AS_STAT"
directive: "data"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.AT_STATX_SYNC_AS_STAT"
license: "PSF"
updated: "2026-10-01"
---

# AT_STATX_SYNC_AS_STAT

A flag for the `os.statx` function.  This flag is defined as `0`, so
it has no effect, but it can be used to explicitly indicate neither
`AT_STATX_FORCE_SYNC` nor `AT_STATX_DONT_SYNC` is being passed.
In the absence of the other two flags, the kernel will generally return
information as fresh as `os.stat` would return.

availability:: Linux >= 4.11 with glibc >= 2.28.

> *Added in 3.15*
