---
id: "python-en-function-importlib-pathfinder"
language: "python"
lang: "en"
category: "function"
name: "PathFinder"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.PathFinder"
license: "PSF"
updated: "2026-10-01"
---

# PathFinder

A `Finder` for `sys.path` and package `__path__` attributes.
This class implements the `importlib.abc.MetaPathFinder` ABC.

Only class methods are defined by this class to alleviate the need for
instantiation.

classmethod:: find_spec(fullname, path=None, target=None)

classmethod:: invalidate_caches()

> *Changed in 3.4*: Calls objects in :data:`sys.path_hooks` with the current working directory for ``''`` (i.e. the empty string).
