---
id: "python-zh-function-fcntl-flock"
language: "python"
lang: "zh"
category: "function"
name: "flock"
signature: "flock(fd, operation, /)"
directive: "function"
module: "fcntl"
source_url: "https://docs.python.org/zh-cn/3/library/fcntl.html#fcntl.flock"
license: "PSF"
updated: "2026-10-01"
---

# flock

Perform the lock operation *operation* on file descriptor *fd* (file objects providing
a `~io.IOBase.fileno` method are accepted as well). See the Unix manual
`flock(2)` for details.  (On some systems, this function is emulated
using :c`fcntl`.)

如果 :c:func:`flock` 调用失败，将引发 :exc:`OSError` 异常。

audit-event:: fcntl.flock fd,operation fcntl.flock
