---
id: "python-en-function-importlib-cache_from_source"
language: "python"
lang: "en"
category: "function"
name: "cache_from_source"
signature: "cache_from_source(path, *, optimization=None)"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.cache_from_source"
license: "PSF"
updated: "2026-10-01"
---

# cache_from_source

Return the PEP 3147/PEP 488 path to the byte-compiled file associated
with the source *path*.  For example, if *path* is `/foo/bar/baz.py` the return
value would be `/foo/bar/__pycache__/baz.cpython-32.pyc` for Python 3.2.
The `cpython-32` string comes from the current magic tag (see
`sys.implementation.cache_tag`; if it is not
defined then `NotImplementedError` will be raised).

The *optimization* parameter is used to specify the optimization level of the
bytecode file. An empty string represents no optimization, so
`/foo/bar/baz.py` with an *optimization* of `''` will result in a
bytecode path of `/foo/bar/__pycache__/baz.cpython-32.pyc`. `None` causes
the interpreter's optimization level to be used. Any other value's string
representation is used, so `/foo/bar/baz.py` with an *optimization* of
`2` will lead to the bytecode path of
`/foo/bar/__pycache__/baz.cpython-32.opt-2.pyc`. The string representation
of *optimization* can only be alphanumeric, else `ValueError` is raised.

> *Added in 3.4*

> *Changed in 3.5*: The *optimization* parameter was added and the *debug_override* parameter was deprecated.

> *Changed in 3.6*: Accepts a :term:`path-like object`.

> *Changed in 3.15*: The *debug_override* parameter was removed.
