---
id: "python-en-function-os-dup"
language: "python"
lang: "en"
category: "function"
name: "dup"
signature: "dup(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.dup"
license: "PSF"
updated: "2026-10-01"
---

# dup

Return a duplicate of file descriptor *fd*. The new file descriptor is
`non-inheritable`.

On Windows, when duplicating a standard stream (0: stdin, 1: stdout,
2: stderr), the new file descriptor is `inheritable`.

availability:: not WASI.

> *Changed in 3.4*: The new file descriptor is now non-inheritable.
