---
id: "python-zh-function-os-grantpt"
language: "python"
lang: "zh"
category: "function"
name: "grantpt"
signature: "grantpt(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.grantpt"
license: "PSF"
updated: "2026-10-01"
---

# grantpt

Grant access to the slave pseudo-terminal device associated with the
master pseudo-terminal device to which the file descriptor *fd* refers.
The file descriptor *fd* is not closed upon failure.

调用 C 标准库函数 :c:func:`grantpt`。

availability:: Unix, not WASI.

> *Added in 3.13*
