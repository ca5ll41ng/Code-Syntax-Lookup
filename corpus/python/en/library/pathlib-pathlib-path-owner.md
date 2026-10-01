---
id: "python-en-function-pathlib-path-owner"
language: "python"
lang: "en"
category: "function"
name: "Path.owner"
signature: "Path.owner(*, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.owner"
license: "PSF"
updated: "2026-10-01"
---

# Path.owner

Return the name of the user owning the file. `KeyError` is raised
if the file's user identifier (UID) isn't found in the system database.

This method normally follows symlinks; to get the owner of the symlink, add
the argument `follow_symlinks=False`.

> *Changed in 3.13*: Raises :exc:`UnsupportedOperation` if the :mod:`pwd` module is not available. In earlier versions, :exc:`NotImplementedError` was raised.

> *Changed in 3.13*: The *follow_symlinks* parameter was added.
