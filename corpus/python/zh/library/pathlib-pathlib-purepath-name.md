---
id: "python-zh-function-pathlib-purepath-name"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.name"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.name"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.name

A string representing the final path component, excluding the drive and
root, if any::

   >>> PurePosixPath('my/library/setup.py').name
   'setup.py'

UNC 驱动器名不被考虑::

   >>> PureWindowsPath('//some/share/setup.py').name
   'setup.py'
   >>> PureWindowsPath('//some/share').name
   ''
