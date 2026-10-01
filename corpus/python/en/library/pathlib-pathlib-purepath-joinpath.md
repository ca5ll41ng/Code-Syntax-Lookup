---
id: "python-en-function-pathlib-purepath-joinpath"
language: "python"
lang: "en"
category: "function"
name: "PurePath.joinpath"
signature: "PurePath.joinpath(*pathsegments)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.joinpath"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.joinpath

Calling this method is equivalent to combining the path with each of
the given *pathsegments* in turn::

   >>> PurePosixPath('/etc').joinpath('passwd')
   PurePosixPath('/etc/passwd')
   >>> PurePosixPath('/etc').joinpath(PurePosixPath('passwd'))
   PurePosixPath('/etc/passwd')
   >>> PurePosixPath('/etc').joinpath('init.d', 'apache2')
   PurePosixPath('/etc/init.d/apache2')
   >>> PureWindowsPath('c:').joinpath('/Program Files')
   PureWindowsPath('c:/Program Files')
