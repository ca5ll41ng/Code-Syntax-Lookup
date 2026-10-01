---
id: "python-zh-function-pathlib-purepath-suffix"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.suffix"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.suffix"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.suffix

最后一个路径组件中以点分割的后一部分（如果有） ::

   >>> PurePosixPath('my/library/setup.py').suffix
   '.py'
   >>> PurePosixPath('my/library.tar.gz').suffix
   '.gz'
   >>> PurePosixPath('my/library').suffix
   ''

这通常被称作文件扩展名。

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix.
