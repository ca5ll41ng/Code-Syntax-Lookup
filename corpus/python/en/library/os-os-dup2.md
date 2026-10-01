---
id: "python-en-function-os-dup2"
language: "python"
lang: "en"
category: "function"
name: "dup2"
signature: "dup2(fd, fd2, inheritable=True)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.dup2"
license: "PSF"
updated: "2026-10-01"
---

# dup2

Duplicate file descriptor *fd* to *fd2*, closing the latter first if
necessary. Return *fd2*. The new file descriptor is `inheritable` by default or non-inheritable if *inheritable*
is `False`.

availability:: not WASI.

> *Changed in 3.4*: Add the optional *inheritable* parameter.

> *Changed in 3.7*: Return *fd2* on success. Previously, ``None`` was always returned.
