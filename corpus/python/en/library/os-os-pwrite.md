---
id: "python-en-function-os-pwrite"
language: "python"
lang: "en"
category: "function"
name: "pwrite"
signature: "pwrite(fd, str, offset, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pwrite"
license: "PSF"
updated: "2026-10-01"
---

# pwrite

Write the bytestring in *str* to file descriptor *fd* at position of
*offset*, leaving the file offset unchanged.

Return the number of bytes actually written.

availability:: Unix.

> *Added in 3.3*
