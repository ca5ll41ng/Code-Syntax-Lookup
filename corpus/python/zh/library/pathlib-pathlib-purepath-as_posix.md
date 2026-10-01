---
id: "python-zh-function-pathlib-purepath-as_posix"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.as_posix"
signature: "PurePath.as_posix()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.as_posix"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.as_posix

返回使用正斜杠 (``/``) 的路径字符串::

   >>> p = PureWindowsPath('c:\\windows')
   >>> str(p)
   'c:\\windows'
   >>> p.as_posix()
   'c:/windows'
