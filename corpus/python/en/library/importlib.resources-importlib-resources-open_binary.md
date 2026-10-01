---
id: "python-en-function-importlib-resources-open_binary"
language: "python"
lang: "en"
category: "function"
name: "open_binary"
signature: "open_binary(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/3/library/importlib.resources.html#importlib.resources.open_binary"
license: "PSF"
updated: "2026-10-01"
---

# open_binary

Open the named resource for binary reading.

See `the introduction` for
details on *anchor* and *path_names*.

This function returns a `~typing.BinaryIO` object,
that is, a binary stream open for reading.

This function is roughly equivalent to::

    files(anchor).joinpath(*path_names).open('rb')

> *Changed in 3.13*: Multiple *path_names* are accepted.
