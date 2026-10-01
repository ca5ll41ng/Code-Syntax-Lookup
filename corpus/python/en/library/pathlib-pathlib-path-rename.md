---
id: "python-en-function-pathlib-path-rename"
language: "python"
lang: "en"
category: "function"
name: "Path.rename"
signature: "Path.rename(target)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.rename"
license: "PSF"
updated: "2026-10-01"
---

# Path.rename

Rename this file or directory to the given *target*, and return a new
`Path` instance pointing to *target*.  On Unix, if *target* exists
and is a file, it will be replaced silently if the user has permission.
On Windows, if *target* exists, `FileExistsError` will be raised.
*target* can be either a string or another path object::

   >>> p = Path('foo')
   >>> p.open('w').write('some text')
   9
   >>> target = Path('bar')
   >>> p.rename(target)
   PosixPath('bar')
   >>> target.open().read()
   'some text'

The target path may be absolute or relative. Relative paths are interpreted
relative to the current working directory, *not* the directory of the
`Path` object.

It is implemented in terms of `os.rename` and gives the same guarantees.

> *Changed in 3.8*: Added return value, return the new :class:`!Path` instance.
