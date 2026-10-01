---
id: "python-en-function-pathlib-path-is_file"
language: "python"
lang: "en"
category: "function"
name: "Path.is_file"
signature: "Path.is_file(*, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_file"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_file

Return `True` if the path points to a regular file. `False` will be
returned if the path is invalid, inaccessible or missing, or if it points
to something other than a regular file. Use `Path.stat` to
distinguish between these cases.

This method normally follows symlinks; to exclude symlinks, add the
argument `follow_symlinks=False`.

> *Changed in 3.13*: The *follow_symlinks* parameter was added.
