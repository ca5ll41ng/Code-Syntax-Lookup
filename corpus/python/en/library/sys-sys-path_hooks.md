---
id: "python-en-function-sys-path_hooks"
language: "python"
lang: "en"
category: "function"
name: "path_hooks"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.path_hooks"
license: "PSF"
updated: "2026-10-01"
---

# path_hooks

A list of callables that take a path argument to try to create a
`finder` for the path. If a finder can be created, it is to be
returned by the callable, else raise `ImportError`.

Originally specified in PEP 302.
