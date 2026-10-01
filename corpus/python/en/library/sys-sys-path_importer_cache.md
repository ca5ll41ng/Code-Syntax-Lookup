---
id: "python-en-function-sys-path_importer_cache"
language: "python"
lang: "en"
category: "function"
name: "path_importer_cache"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.path_importer_cache"
license: "PSF"
updated: "2026-10-01"
---

# path_importer_cache

A dictionary acting as a cache for `finder` objects. The keys are
paths that have been passed to `sys.path_hooks` and the values are
the finders that are found. If a path is a valid file system path but no
finder is found on `sys.path_hooks` then `None` is
stored.

Originally specified in PEP 302.
