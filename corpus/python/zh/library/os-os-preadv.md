---
id: "python-zh-function-os-preadv"
language: "python"
lang: "zh"
category: "function"
name: "preadv"
signature: "preadv(fd, buffers, offset, flags=0, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.preadv"
license: "PSF"
updated: "2026-10-01"
---

# preadv

Read from a file descriptor *fd* at a position of *offset* into mutable
`bytes-like objects` *buffers*, leaving the file
offset unchanged.  Transfer data into each buffer until it is full and then
move on to the next buffer in the sequence to hold the rest of the data.

The flags argument contains a bitwise OR of zero or more of the following
flags:

- `RWF_HIPRI`
- `RWF_NOWAIT`
- `RWF_DONTCACHE`

Return the total number of bytes actually read which can be less than the
total capacity of all the objects.

The operating system may set a limit (`sysconf` value
`'SC_IOV_MAX'`) on the number of buffers that can be used.

本方法结合了 :func:`os.readv` 和 :func:`os.pread` 的功能。

availability:: Linux >= 2.6.30, FreeBSD >= 6.0, OpenBSD >= 2.7, AIX >= 7.1.

> *Added in 3.7*
