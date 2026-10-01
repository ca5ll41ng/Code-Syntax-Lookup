---
id: "python-en-function-importlib-pathentryfinder"
language: "python"
lang: "en"
category: "function"
name: "PathEntryFinder"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.PathEntryFinder"
license: "PSF"
updated: "2026-10-01"
---

# PathEntryFinder

An abstract base class representing a `path entry finder`.  Though
it bears some similarities to `MetaPathFinder`, `PathEntryFinder`
is meant for use only within the path-based import subsystem provided
by `importlib.machinery.PathFinder`.

> *Added in 3.3*

> *Changed in 3.10*: No longer a subclass of :class:`!Finder`.

method:: find_spec(fullname, target=None)

method:: invalidate_caches()

method:: discover(parent=None)
