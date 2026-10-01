---
id: "python-zh-function-os-truncate"
language: "python"
lang: "zh"
category: "function"
name: "truncate"
signature: "truncate(path, length)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/zh-cn/3/library/os.html#os.truncate"
license: "PSF"
updated: "2026-10-01"
---

# truncate

Truncate the file corresponding to *path*, so that it is at most
*length* bytes in size.

本函数支持 :ref:`指定文件描述符为参数 <path_fd>`。

audit-event:: os.truncate path,length os.truncate

availability:: Unix, Windows.

> *Added in 3.3*

> *Changed in 3.5*: Added support for Windows

> *Changed in 3.6*: Accepts a :term:`path-like object`.
