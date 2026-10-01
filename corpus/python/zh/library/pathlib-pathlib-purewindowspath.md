---
id: "python-zh-function-pathlib-purewindowspath"
language: "python"
lang: "zh"
category: "function"
name: "PureWindowsPath"
signature: "PureWindowsPath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PureWindowsPath"
license: "PSF"
updated: "2026-10-01"
---

# PureWindowsPath

A subclass of `PurePath`, this path flavour represents Windows
filesystem paths, including `UNC paths`_::

   >>> PureWindowsPath('c:/', 'Users', 'Ximénez')
   PureWindowsPath('c:/Users/Ximénez')
   >>> PureWindowsPath('//server/share/file')
   PureWindowsPath('//server/share/file')

*pathsegments* 参数的指定和 :class:`PurePath` 相同。

.. _unc paths: https://en.wikipedia.org/wiki/Path_(computing)#UNC
