---
id: "python-en-function-pathlib-path-home"
language: "python"
lang: "en"
category: "function"
name: "Path.home"
signature: "Path.home()"
directive: "classmethod"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.home"
license: "PSF"
updated: "2026-10-01"
---

# Path.home

Return a new path object representing the user's home directory (as
returned by `os.path.expanduser` with `~` construct). If the home
directory can't be resolved, `RuntimeError` is raised.

::

   >>> Path.home()
   PosixPath('/home/antoine')

> *Added in 3.5*
