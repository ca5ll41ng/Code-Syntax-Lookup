---
id: "python-en-function-pathlib-path-group"
language: "python"
lang: "en"
category: "function"
name: "Path.group"
signature: "Path.group(*, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.group"
license: "PSF"
updated: "2026-10-01"
---

# Path.group

Return the name of the group owning the file. `KeyError` is raised
if the file's group identifier (GID) isn't found in the system database.

This method normally follows symlinks; to get the group of the symlink, add
the argument `follow_symlinks=False`.

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` if the :mod:`grp` module is not available. In earlier versions, :exc:`NotImplementedError` was raised.

> *Changed in 3.13*: The *follow_symlinks* parameter was added.
