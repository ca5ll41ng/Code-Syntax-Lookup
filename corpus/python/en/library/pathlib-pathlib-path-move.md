---
id: "python-en-function-pathlib-path-move"
language: "python"
lang: "en"
category: "function"
name: "Path.move"
signature: "Path.move(target)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.move"
license: "PSF"
updated: "2026-10-01"
---

# Path.move

Move this file or directory tree to the given *target*, and return a new
`Path` instance pointing to *target*.

If the *target* doesn't exist it will be created. If both this path and the
*target* are existing files, then the target is overwritten. If both paths
point to the same file or directory, or the *target* is a non-empty
directory, then `OSError` is raised.

If both paths are on the same filesystem, the move is performed with
`os.replace`. Otherwise, this path is copied (preserving metadata and
symlinks) and then deleted.

> *Added in 3.14*
