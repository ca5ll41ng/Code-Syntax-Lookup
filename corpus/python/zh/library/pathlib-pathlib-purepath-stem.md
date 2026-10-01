---
id: "python-zh-function-pathlib-purepath-stem"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.stem"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.stem"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.stem

最后一个路径组件，除去后缀::

   >>> PurePosixPath('my/library.tar.gz').stem
   'library.tar'
   >>> PurePosixPath('my/library.tar').stem
   'library'
   >>> PurePosixPath('my/library').stem
   'library'

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix.
