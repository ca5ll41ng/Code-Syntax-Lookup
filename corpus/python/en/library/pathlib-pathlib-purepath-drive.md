---
id: "python-en-function-pathlib-purepath-drive"
language: "python"
lang: "en"
category: "function"
name: "PurePath.drive"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.drive"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.drive

A string representing the drive letter or name, if any::

   >>> PureWindowsPath('c:/Program Files/').drive
   'c:'
   >>> PureWindowsPath('/Program Files/').drive
   ''
   >>> PurePosixPath('/etc').drive
   ''

UNC shares are also considered drives::

   >>> PureWindowsPath('//host/share/foo.txt').drive
   '\\\\host\\share'
