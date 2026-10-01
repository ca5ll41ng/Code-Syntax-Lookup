---
id: "python-zh-function-pathlib-posixpath"
language: "python"
lang: "zh"
category: "function"
name: "PosixPath"
signature: "PosixPath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PosixPath"
license: "PSF"
updated: "2026-10-01"
---

# PosixPath

A subclass of `Path` and `PurePosixPath`, this class
represents concrete non-Windows filesystem paths::

   >>> PosixPath('/etc/hosts')
   PosixPath('/etc/hosts')

*pathsegments* 参数的指定和 :class:`PurePath` 相同。

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` on Windows. In previous versions, :exc:`NotImplementedError` was raised instead.
