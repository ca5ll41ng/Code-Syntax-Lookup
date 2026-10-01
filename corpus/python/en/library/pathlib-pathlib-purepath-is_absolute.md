---
id: "python-en-function-pathlib-purepath-is_absolute"
language: "python"
lang: "en"
category: "function"
name: "PurePath.is_absolute"
signature: "PurePath.is_absolute()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.is_absolute"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.is_absolute

Return whether the path is absolute or not.  A path is considered absolute
if it has both a root and (if the flavour allows) a drive::

   >>> PurePosixPath('/a/b').is_absolute()
   True
   >>> PurePosixPath('a/b').is_absolute()
   False

   >>> PureWindowsPath('c:/a/b').is_absolute()
   True
   >>> PureWindowsPath('/a/b').is_absolute()
   False
   >>> PureWindowsPath('c:').is_absolute()
   False
   >>> PureWindowsPath('//some/share').is_absolute()
   True
