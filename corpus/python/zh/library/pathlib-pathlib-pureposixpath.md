---
id: "python-zh-function-pathlib-pureposixpath"
language: "python"
lang: "zh"
category: "function"
name: "PurePosixPath"
signature: "PurePosixPath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePosixPath"
license: "PSF"
updated: "2026-10-01"
---

# PurePosixPath

A subclass of `PurePath`, this path flavour represents non-Windows
filesystem paths::

   >>> PurePosixPath('/etc/hosts')
   PurePosixPath('/etc/hosts')

*pathsegments* 参数的指定和 :class:`PurePath` 相同。
