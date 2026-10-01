---
id: "python-zh-function-pathlib-path"
language: "python"
lang: "zh"
category: "function"
name: "Path"
signature: "Path(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path"
license: "PSF"
updated: "2026-10-01"
---

# Path

A subclass of `PurePath`, this class represents concrete paths of
the system's path flavour (instantiating it creates either a
`PosixPath` or a `WindowsPath`)::

   >>> Path('setup.py')
   PosixPath('setup.py')

*pathsegments* 参数的指定和 :class:`PurePath` 相同。
