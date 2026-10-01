---
id: "python-en-function-pathlib-purewindowspath"
language: "python"
lang: "en"
category: "function"
name: "PureWindowsPath"
signature: "PureWindowsPath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PureWindowsPath"
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

*pathsegments* is specified similarly to `PurePath`.

.. _unc paths: https://en.wikipedia.org/wiki/Path_(computing)#UNC
