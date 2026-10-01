---
id: "python-en-function-os-ftruncate"
language: "python"
lang: "en"
category: "function"
name: "ftruncate"
signature: "ftruncate(fd, length, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.ftruncate"
license: "PSF"
updated: "2026-10-01"
---

# ftruncate

Truncate the file corresponding to file descriptor *fd*, so that it is at
most *length* bytes in size.  As of Python 3.3, this is equivalent to
`os.truncate(fd, length)`.

audit-event:: os.truncate fd,length os.ftruncate

availability:: Unix, Windows.

> *Changed in 3.5*: Added support for Windows
