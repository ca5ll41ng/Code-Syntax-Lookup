---
id: "python-en-function-pathlib-path-stat"
language: "python"
lang: "en"
category: "function"
name: "Path.stat"
signature: "Path.stat(*, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.stat"
license: "PSF"
updated: "2026-10-01"
---

# Path.stat

Return an `os.stat_result` object containing information about this path, like `os.stat`.
The result is looked up at each call to this method.

This method normally follows symlinks; to stat a symlink add the argument
`follow_symlinks=False`, or use `~Path.lstat`.

::

   >>> p = Path('setup.py')
   >>> p.stat().st_size
   956
   >>> p.stat().st_mtime
   1327883547.852554

> *Changed in 3.10*: The *follow_symlinks* parameter was added.
