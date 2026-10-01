---
id: "python-en-function-os-pread"
language: "python"
lang: "en"
category: "function"
name: "pread"
signature: "pread(fd, n, offset, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pread"
license: "PSF"
updated: "2026-10-01"
---

# pread

Read at most *n* bytes from file descriptor *fd* at a position of *offset*,
leaving the file offset unchanged.

Return a bytestring containing the bytes read. If the end of the file
referred to by *fd* has been reached, an empty bytes object is returned.

availability:: Unix.

> *Added in 3.3*
