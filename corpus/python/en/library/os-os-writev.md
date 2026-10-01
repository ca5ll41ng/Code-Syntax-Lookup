---
id: "python-en-function-os-writev"
language: "python"
lang: "en"
category: "function"
name: "writev"
signature: "writev(fd, buffers, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.writev"
license: "PSF"
updated: "2026-10-01"
---

# writev

Write the contents of *buffers* to file descriptor *fd*. *buffers* must be
a sequence of `bytes-like objects`. Buffers are
processed in array order. Entire contents of the first buffer is written
before proceeding to the second, and so on.

Returns the total number of bytes actually written.

The operating system may set a limit (`sysconf` value
`'SC_IOV_MAX'`) on the number of buffers that can be used.

availability:: Unix.

> *Added in 3.3*
