---
id: "python-zh-function-os-pwritev"
language: "python"
lang: "zh"
category: "function"
name: "pwritev"
signature: "pwritev(fd, buffers, offset, flags=0, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.pwritev"
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

返回实际写入的字节总数。

The operating system may set a limit (`sysconf` value
`'SC_IOV_MAX'`) on the number of buffers that can be used.

本方法结合了 :func:`os.writev` 和 :func:`os.pwrite` 的功能。

availability:: Linux >= 2.6.30, FreeBSD >= 6.0, OpenBSD >= 2.7, AIX >= 7.1.

> *Added in 3.7*
