---
id: "python-en-function-pathlib-purepath-anchor"
language: "python"
lang: "en"
category: "function"
name: "PurePath.anchor"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.anchor"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.anchor

The concatenation of the drive and root::

   >>> PureWindowsPath('c:/Program Files/').anchor
   'c:\\'
   >>> PureWindowsPath('c:Program Files/').anchor
   'c:'
   >>> PurePosixPath('/etc').anchor
   '/'
   >>> PureWindowsPath('//host/share').anchor
   '\\\\host\\share\\'
