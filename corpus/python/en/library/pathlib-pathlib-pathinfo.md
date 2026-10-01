---
id: "python-en-function-pathlib-pathinfo"
language: "python"
lang: "en"
category: "function"
name: "PathInfo"
signature: "PathInfo()"
directive: "class"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PathInfo"
license: "PSF"
updated: "2026-10-01"
---

# PathInfo

A `typing.Protocol` describing the
`Path.info` attribute. Implementations may
return cached results from their methods.

method:: exists(*, follow_symlinks=True)

method:: is_dir(*, follow_symlinks=True)

method:: is_file(*, follow_symlinks=True)

method:: is_symlink()
