---
id: "python-en-function-os-path-isfile"
language: "python"
lang: "en"
category: "function"
name: "isfile"
signature: "isfile(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.isfile"
license: "PSF"
updated: "2026-10-01"
---

# isfile

Return `True` if *path* is an `existing` regular file.
This follows symbolic links, so both `islink` and `isfile` can
be true for the same path.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
