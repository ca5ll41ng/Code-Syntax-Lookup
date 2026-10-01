---
id: "python-en-function-pathlib-path-expanduser"
language: "python"
lang: "en"
category: "function"
name: "Path.expanduser"
signature: "Path.expanduser()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.expanduser"
license: "PSF"
updated: "2026-10-01"
---

# Path.expanduser

Return a new path with expanded `~` and `~user` constructs,
as returned by `os.path.expanduser`. If a home directory can't be
resolved, `RuntimeError` is raised.

::

   >>> p = PosixPath('~/films/Monty Python')
   >>> p.expanduser()
   PosixPath('/home/eric/films/Monty Python')

> *Added in 3.5*
