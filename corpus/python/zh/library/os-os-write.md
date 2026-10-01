---
id: "python-zh-function-os-write"
language: "python"
lang: "zh"
category: "function"
name: "write"
signature: "write(fd, str, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.write"
license: "PSF"
updated: "2026-10-01"
---

# write

将 *str* 中的字节串 (bytestring) 写入文件描述符 *fd*。

返回实际写入的字节数。

> **Note**
>
> This function is intended for low-level I/O and must be applied to a file
> descriptor as returned by `os.open` or `pipe`.  To write a "file
> object" returned by the built-in function `open` or by `popen` or
> `fdopen`, or `sys.stdout` or `sys.stderr`, use its
> `~io.TextIOBase.write` method.
>

> *Changed in 3.5*: If the system call is interrupted and the signal handler does not raise an exception, the function now retries the system call instead of raising an :exc:`InterruptedError` exception (see :pep:`475` for the rationale).
