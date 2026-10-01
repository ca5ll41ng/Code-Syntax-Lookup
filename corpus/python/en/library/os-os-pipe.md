---
id: "python-en-function-os-pipe"
language: "python"
lang: "en"
category: "function"
name: "pipe"
signature: "pipe()"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pipe"
license: "PSF"
updated: "2026-10-01"
---

# pipe

Create a pipe.  Return a pair of file descriptors `(r, w)` usable for
reading and writing, respectively. The new file descriptor is
`non-inheritable`.

availability:: Unix, Windows.

> *Changed in 3.4*: The new file descriptors are now non-inheritable.
