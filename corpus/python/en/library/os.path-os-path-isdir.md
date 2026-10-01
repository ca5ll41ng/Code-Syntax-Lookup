---
id: "python-en-function-os-path-isdir"
language: "python"
lang: "en"
category: "function"
name: "isdir"
signature: "isdir(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.isdir"
license: "PSF"
updated: "2026-10-01"
---

# isdir

Return `True` if *path* is an `existing` directory.  This
follows symbolic links, so both `islink` and `isdir` can be true
for the same path.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
