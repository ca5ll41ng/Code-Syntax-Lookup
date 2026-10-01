---
id: "python-en-function-pathlib-purepath-name"
language: "python"
lang: "en"
category: "function"
name: "PurePath.name"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.name"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.name

A string representing the final path component, excluding the drive and
root, if any::

   >>> PurePosixPath('my/library/setup.py').name
   'setup.py'

UNC drive names are not considered::

   >>> PureWindowsPath('//some/share/setup.py').name
   'setup.py'
   >>> PureWindowsPath('//some/share').name
   ''
