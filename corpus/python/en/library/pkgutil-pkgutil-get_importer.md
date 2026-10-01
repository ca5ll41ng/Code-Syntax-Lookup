---
id: "python-en-function-pkgutil-get_importer"
language: "python"
lang: "en"
category: "function"
name: "get_importer"
signature: "get_importer(path_item)"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/3/library/pkgutil.html#pkgutil.get_importer"
license: "PSF"
updated: "2026-10-01"
---

# get_importer

Retrieve a `finder` for the given *path_item*.

The returned finder is cached in `sys.path_importer_cache` if it was
newly created by a path hook.

The cache (or part of it) can be cleared manually if a rescan of
`sys.path_hooks` is necessary.

> *Changed in 3.3*: Updated to be based directly on :mod:`importlib` rather than relying on the package internal :pep:`302` import emulation.
