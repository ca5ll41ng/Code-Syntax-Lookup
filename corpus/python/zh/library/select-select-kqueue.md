---
id: "python-zh-function-select-kqueue"
language: "python"
lang: "zh"
category: "function"
name: "kqueue"
signature: "kqueue()"
directive: "function"
module: "select"
source_url: "https://docs.python.org/zh-cn/3/library/select.html#select.kqueue"
license: "PSF"
updated: "2026-10-01"
---

# kqueue

Returns a kernel queue object; see section
`kqueue-objects` below for the methods supported by kqueue objects.

新的文件描述符是 :ref:`不可继承的 <fd_inheritance>`。

> *Changed in 3.4*: The new file descriptor is now non-inheritable.

availability:: BSD, macOS.
