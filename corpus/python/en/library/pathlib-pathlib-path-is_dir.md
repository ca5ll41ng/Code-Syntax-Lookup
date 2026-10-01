---
id: "python-en-function-pathlib-path-is_dir"
language: "python"
lang: "en"
category: "function"
name: "Path.is_dir"
signature: "Path.is_dir(*, follow_symlinks=True)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_dir"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_dir

Return `True` if the path points to a directory. `False` will be
returned if the path is invalid, inaccessible or missing, or if it points
to something other than a directory. Use `Path.stat` to distinguish
between these cases.

This method normally follows symlinks; to exclude symlinks to directories,
add the argument `follow_symlinks=False`.

> *Changed in 3.13*: The *follow_symlinks* parameter was added.
