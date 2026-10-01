---
id: "python-en-function-os-chroot"
language: "python"
lang: "en"
category: "function"
name: "chroot"
signature: "chroot(path)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.chroot"
license: "PSF"
updated: "2026-10-01"
---

# chroot

Change the root directory of the current process to *path*.

availability:: Unix, not WASI.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.16*: Support for Android now exists.
