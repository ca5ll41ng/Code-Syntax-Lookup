---
id: "python-en-function-os-path-basename"
language: "python"
lang: "en"
category: "function"
name: "basename"
signature: "basename(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.basename"
license: "PSF"
updated: "2026-10-01"
---

# basename

Return the base name of pathname *path*.  This is the second element of the
pair returned by passing *path* to the function `split`.  Note that
the result of this function is different
from the Unix `basename` program; where `basename` for
`'/foo/bar/'` returns `'bar'`, the `basename` function returns an
empty string (`''`).

> *Changed in 3.6*: Accepts a :term:`path-like object`.
