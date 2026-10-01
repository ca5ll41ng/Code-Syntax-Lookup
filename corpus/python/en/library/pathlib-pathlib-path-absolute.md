---
id: "python-en-function-pathlib-path-absolute"
language: "python"
lang: "en"
category: "function"
name: "Path.absolute"
signature: "Path.absolute()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.absolute"
license: "PSF"
updated: "2026-10-01"
---

# Path.absolute

Make the path absolute, without normalization or resolving symlinks.
Returns a new path object::

   >>> p = Path('tests')
   >>> p
   PosixPath('tests')
   >>> p.absolute()
   PosixPath('/home/antoine/pathlib/tests')
