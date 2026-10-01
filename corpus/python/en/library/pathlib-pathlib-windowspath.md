---
id: "python-en-function-pathlib-windowspath"
language: "python"
lang: "en"
category: "function"
name: "WindowsPath"
signature: "WindowsPath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.WindowsPath"
license: "PSF"
updated: "2026-10-01"
---

# WindowsPath

A subclass of `Path` and `PureWindowsPath`, this class
represents concrete Windows filesystem paths::

   >>> WindowsPath('c:/', 'Users', 'Ximénez')
   WindowsPath('c:/Users/Ximénez')

*pathsegments* is specified similarly to `PurePath`.

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` on non-Windows platforms. In previous versions, :exc:`NotImplementedError` was raised instead.
