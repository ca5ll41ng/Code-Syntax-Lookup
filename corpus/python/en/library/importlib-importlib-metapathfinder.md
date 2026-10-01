---
id: "python-en-function-importlib-metapathfinder"
language: "python"
lang: "en"
category: "function"
name: "MetaPathFinder"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.MetaPathFinder"
license: "PSF"
updated: "2026-10-01"
---

# MetaPathFinder

An abstract base class representing a `meta path finder`.

> *Added in 3.3*

> *Changed in 3.10*: No longer a subclass of :class:`!Finder`.

method:: find_spec(fullname, path, target=None)

method:: invalidate_caches()

method:: discover(parent=None)
