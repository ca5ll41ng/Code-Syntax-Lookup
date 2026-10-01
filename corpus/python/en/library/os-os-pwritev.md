---
id: "python-en-function-os-pwritev"
language: "python"
lang: "en"
category: "function"
name: "pwritev"
signature: "pwritev(fd, buffers, offset, flags=0, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.pwritev"
license: "PSF"
updated: "2026-10-01"
---

# pwritev

Write the *buffers* contents to file descriptor *fd* at an offset *offset*,
leaving the file offset unchanged.  *buffers* must be a sequence of
`bytes-like objects`. Buffers are processed in
array order. Entire contents of the first buffer is written before
proceeding to the second, and so on.

The flags argument contains a bitwise OR of zero or more of the following
flags:

- `RWF_DSYNC`
- `RWF_SYNC`
- `RWF_APPEND`
- `RWF_DONTCACHE`
- `RWF_ATOMIC`
- `RWF_NOSIGNAL`

Return the total number of bytes actually written.

The operating system may set a limit (`sysconf` value
`'SC_IOV_MAX'`) on the number of buffers that can be used.

Combine the functionality of `os.writev` and `os.pwrite`.

availability:: Linux >= 2.6.30, FreeBSD >= 6.0, OpenBSD >= 2.7, AIX >= 7.1.

> *Added in 3.7*
