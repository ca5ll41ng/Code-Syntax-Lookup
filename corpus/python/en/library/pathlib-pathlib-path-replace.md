---
id: "python-en-function-pathlib-path-replace"
language: "python"
lang: "en"
category: "function"
name: "Path.replace"
signature: "Path.replace(target)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.replace"
license: "PSF"
updated: "2026-10-01"
---

# Path.replace

Rename this file or directory to the given *target*, and return a new
`Path` instance pointing to *target*.  If *target* points to an
existing file or empty directory, it will be unconditionally replaced.

The target path may be absolute or relative. Relative paths are interpreted
relative to the current working directory, *not* the directory of the
`Path` object.

> *Changed in 3.8*: Added return value, return the new :class:`!Path` instance.
