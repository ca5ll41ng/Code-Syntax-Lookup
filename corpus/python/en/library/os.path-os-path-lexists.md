---
id: "python-en-function-os-path-lexists"
language: "python"
lang: "en"
category: "function"
name: "lexists"
signature: "lexists(path)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.lexists"
license: "PSF"
updated: "2026-10-01"
---

# lexists

Return `True` if *path* refers to an existing path, including
broken symbolic links.   Equivalent to `exists` on platforms lacking
`os.lstat`.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
