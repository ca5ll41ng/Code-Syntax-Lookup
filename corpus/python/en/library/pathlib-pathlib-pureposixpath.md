---
id: "python-en-function-pathlib-pureposixpath"
language: "python"
lang: "en"
category: "function"
name: "PurePosixPath"
signature: "PurePosixPath(*pathsegments)"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePosixPath"
license: "PSF"
updated: "2026-10-01"
---

# PurePosixPath

A subclass of `PurePath`, this path flavour represents non-Windows
filesystem paths::

   >>> PurePosixPath('/etc/hosts')
   PurePosixPath('/etc/hosts')

*pathsegments* is specified similarly to `PurePath`.
