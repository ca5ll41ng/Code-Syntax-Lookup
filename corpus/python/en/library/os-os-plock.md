---
id: "python-en-function-os-plock"
language: "python"
lang: "en"
category: "function"
name: "plock"
signature: "plock(op, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.plock"
license: "PSF"
updated: "2026-10-01"
---

# plock

Lock program segments into memory.  The value of *op* (defined in
`<sys/lock.h>`) determines which segments are locked.

availability:: Unix, not WASI, not macOS, not iOS.
