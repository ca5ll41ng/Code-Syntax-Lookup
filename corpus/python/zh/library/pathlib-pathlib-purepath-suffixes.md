---
id: "python-zh-function-pathlib-purepath-suffixes"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.suffixes"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.suffixes"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.suffixes

由路径后缀组成的列表，经常被称作文件扩展名::

   >>> PurePosixPath('my/library.tar.gar').suffixes
   ['.tar', '.gar']
   >>> PurePosixPath('my/library.tar.gz').suffixes
   ['.tar', '.gz']
   >>> PurePosixPath('my/library').suffixes
   []

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix.
