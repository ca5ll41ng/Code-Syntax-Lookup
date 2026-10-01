---
id: "python-zh-function-os-path-relpath"
language: "python"
lang: "zh"
category: "function"
name: "relpath"
signature: "relpath(path, start=os.curdir)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/zh-cn/3/library/os.path.html#os.path.relpath"
license: "PSF"
updated: "2026-10-01"
---

# relpath

Return a relative filepath to *path* either from the current directory or
from an optional *start* directory.  This is a path computation:  the
filesystem is not accessed to confirm the existence or nature of *path* or
*start*.  On Windows, `ValueError` is raised when *path* and *start*
are on different drives.

*start* 默认为 :data:`os.curdir`。

> *Changed in 3.6*: Accepts a :term:`path-like object`.
