---
id: "python-en-function-pathlib-path-iterdir"
language: "python"
lang: "en"
category: "function"
name: "Path.iterdir"
signature: "Path.iterdir()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.iterdir"
license: "PSF"
updated: "2026-10-01"
---

# Path.iterdir

When the path points to a directory, yield path objects of the directory
contents::

   >>> p = Path('docs')
   >>> for child in p.iterdir(): child
   ...
   PosixPath('docs/conf.py')
   PosixPath('docs/_templates')
   PosixPath('docs/make.bat')
   PosixPath('docs/index.rst')
   PosixPath('docs/_build')
   PosixPath('docs/_static')
   PosixPath('docs/Makefile')

The children are yielded in arbitrary order, and the special entries
`'.'` and `'..'` are not included.  If a file is removed from or added
to the directory after creating the iterator, it is unspecified whether
a path object for that file is included.

If the path is not a directory or otherwise inaccessible, `OSError` is
raised.
