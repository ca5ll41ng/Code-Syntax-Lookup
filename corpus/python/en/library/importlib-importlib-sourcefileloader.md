---
id: "python-en-function-importlib-sourcefileloader"
language: "python"
lang: "en"
category: "function"
name: "SourceFileLoader"
signature: "SourceFileLoader(fullname, path)"
directive: "class"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.SourceFileLoader"
license: "PSF"
updated: "2026-10-01"
---

# SourceFileLoader

A concrete implementation of `importlib.abc.SourceLoader` by
subclassing `importlib.abc.FileLoader` and providing some concrete
implementations of other methods.

> *Added in 3.3*

> *Changed in 3.15*: Removed the ``load_module()`` method.

attribute:: name

attribute:: path

method:: is_package(fullname)

method:: path_stats(path)

method:: set_data(path, data)
