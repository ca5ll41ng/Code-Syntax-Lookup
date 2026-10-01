---
id: "python-en-function-pathlib-path-readlink"
language: "python"
lang: "en"
category: "function"
name: "Path.readlink"
signature: "Path.readlink()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.readlink"
license: "PSF"
updated: "2026-10-01"
---

# Path.readlink

Return the path to which the symbolic link points (as returned by
`os.readlink`)::

   >>> p = Path('mylink')
   >>> p.symlink_to('setup.py')
   >>> p.readlink()
   PosixPath('setup.py')

> *Added in 3.9*

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` if :func:`os.readlink` is not available. In previous versions, :exc:`NotImplementedError` was raised.
