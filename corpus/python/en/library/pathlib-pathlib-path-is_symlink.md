---
id: "python-en-function-pathlib-path-is_symlink"
language: "python"
lang: "en"
category: "function"
name: "Path.is_symlink"
signature: "Path.is_symlink()"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.is_symlink"
license: "PSF"
updated: "2026-10-01"
---

# Path.is_symlink

Return `True` if the path points to a symbolic link, even if that symlink
is broken. `False` will be returned if the path is invalid, inaccessible
or missing, or if it points to something other than a symbolic link. Use
`Path.stat` to distinguish between these cases.
