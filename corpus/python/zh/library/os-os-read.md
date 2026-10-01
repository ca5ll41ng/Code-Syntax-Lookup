---
id: "python-zh-function-os-read"
language: "python"
lang: "zh"
category: "function"
name: "read"
signature: "read(fd, n, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.read"
license: "PSF"
updated: "2026-10-01"
---

# read

从文件描述符 *fd* 中读取至多 *n* 个字节。

Return a bytestring containing the bytes read. If the end of the file
referred to by *fd* has been reached, an empty bytes object is returned.

> **Note**
>
> This function is intended for low-level I/O and must be applied to a file
> descriptor as returned by `os.open` or `pipe`.  To read a
> "file object" returned by the built-in function `open` or by
> `popen` or `fdopen`, or `sys.stdin`, use its
> `~io.TextIOBase.read` or `~io.IOBase.readline` methods.
>

> *Changed in 3.5*: If the system call is interrupted and the signal handler does not raise an exception, the function now retries the system call instead of raising an :exc:`InterruptedError` exception (see :pep:`475` for the rationale).
