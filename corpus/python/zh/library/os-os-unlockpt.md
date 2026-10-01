---
id: "python-zh-function-os-unlockpt"
language: "python"
lang: "zh"
category: "function"
name: "unlockpt"
signature: "unlockpt(fd, /)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.unlockpt"
license: "PSF"
updated: "2026-10-01"
---

# unlockpt

Unlock the slave pseudo-terminal device associated with the master
pseudo-terminal device to which the file descriptor *fd* refers.
The file descriptor *fd* is not closed upon failure.

调用 C 标准库函数 :c:func:`unlockpt`。

availability:: Unix, not WASI.

> *Added in 3.13*
