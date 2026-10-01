---
id: "python-zh-function-pathlib-purepath-parts"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.parts"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.parts"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.parts

一个元组，可以访问路径的多个组件::

   >>> p = PurePath('/usr/bin/python3')
   >>> p.parts
   ('/', 'usr', 'bin', 'python3')

   >>> p = PureWindowsPath('c:/Program Files/PSF')
   >>> p.parts
   ('c:\\', 'Program Files', 'PSF')

（注意盘符和本地根目录是如何重组的）
