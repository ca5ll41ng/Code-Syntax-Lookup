---
id: "python-zh-function-pathlib-purepath-anchor"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.anchor"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.anchor"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.anchor

驱动器和根的联合::

   >>> PureWindowsPath('c:/Program Files/').anchor
   'c:\\'
   >>> PureWindowsPath('c:Program Files/').anchor
   'c:'
   >>> PurePosixPath('/etc').anchor
   '/'
   >>> PureWindowsPath('//host/share').anchor
   '\\\\host\\share\\'
