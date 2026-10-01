---
id: "python-en-function-pathlib-purepath-as_posix"
language: "python"
lang: "en"
category: "function"
name: "PurePath.as_posix"
signature: "PurePath.as_posix()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.as_posix"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.as_posix

Return a string representation of the path with forward slashes (`/`)::

   >>> p = PureWindowsPath('c:\\windows')
   >>> str(p)
   'c:\\windows'
   >>> p.as_posix()
   'c:/windows'
