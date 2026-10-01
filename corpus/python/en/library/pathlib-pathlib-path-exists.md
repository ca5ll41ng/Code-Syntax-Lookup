---
id: "python-en-function-pathlib-path-exists"
language: "python"
lang: "en"
category: "function"
name: "Path.exists"
signature: "Path.exists(*, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.exists"
license: "PSF"
updated: "2026-10-01"
---

# Path.exists

Return `True` if the path points to an existing file or directory and
`False` if the path is invalid, inaccessible or missing.
Use `Path.stat` to distinguish between these cases.

This method normally follows symlinks; to check if a symlink exists, add
the argument `follow_symlinks=False`.

::

   >>> Path('').exists()  # The current directory.
   True
   >>> Path('.').exists()
   True
   >>> Path('setup.py').exists()
   True
   >>> Path('/etc').exists()
   True
   >>> Path('nonexistentfile').exists()
   False

> *Changed in 3.12*: The *follow_symlinks* parameter was added.
