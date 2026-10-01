---
id: "python-en-function-importlib-resources-read_binary"
language: "python"
lang: "en"
category: "function"
name: "read_binary"
signature: "read_binary(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/3/library/importlib.resources.html#importlib.resources.read_binary"
license: "PSF"
updated: "2026-10-01"
---

# read_binary

Read and return the contents of the named resource as `bytes`.

See `the introduction` for
details on *anchor* and *path_names*.

This function is roughly equivalent to::

      files(anchor).joinpath(*path_names).read_bytes()

> *Changed in 3.13*: Multiple *path_names* are accepted.
