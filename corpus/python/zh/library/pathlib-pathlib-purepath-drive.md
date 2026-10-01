---
id: "python-zh-function-pathlib-purepath-drive"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.drive"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.drive"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.drive

一个表示驱动器盘符或命名的字符串，如果存在::

   >>> PureWindowsPath('c:/Program Files/').drive
   'c:'
   >>> PureWindowsPath('/Program Files/').drive
   ''
   >>> PurePosixPath('/etc').drive
   ''

UNC 分享也被认作驱动器::

   >>> PureWindowsPath('//host/share/foo.txt').drive
   '\\\\host\\share'
