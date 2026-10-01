---
id: "python-en-function-importlib-source_from_cache"
language: "python"
lang: "en"
category: "function"
name: "source_from_cache"
signature: "source_from_cache(path)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.source_from_cache"
license: "PSF"
updated: "2026-10-01"
---

# source_from_cache

Given the *path* to a PEP 3147 file name, return the associated source code
file path.  For example, if *path* is
`/foo/bar/__pycache__/baz.cpython-32.pyc` the returned path would be
`/foo/bar/baz.py`.  *path* need not exist, however if it does not conform
to PEP 3147 or PEP 488 format, a `ValueError` is raised. If
`sys.implementation.cache_tag` is not defined,
`NotImplementedError` is raised.

> *Added in 3.4*

> *Changed in 3.6*: Accepts a :term:`path-like object`.
