---
id: "python-en-function-os-path-normcase"
language: "python"
lang: "en"
category: "function"
name: "normcase"
signature: "normcase(path, /)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.normcase"
license: "PSF"
updated: "2026-10-01"
---

# normcase

Normalize the case of a pathname.  On Windows, convert all characters in the
pathname to lowercase, and also convert forward slashes to backward slashes.
On other operating systems, return the path unchanged.

> *Changed in 3.6*: Accepts a :term:`path-like object`.
