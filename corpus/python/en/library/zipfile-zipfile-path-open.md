---
id: "python-en-function-zipfile-path-open"
language: "python"
lang: "en"
category: "function"
name: "Path.open"
signature: "Path.open(mode='r', *, pwd, **)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.Path.open"
license: "PSF"
updated: "2026-10-01"
---

# Path.open

Invoke `ZipFile.open` on the current path.
Allows opening for read or write, text or binary
through supported modes: 'r', 'w', 'rb', 'wb'.
Positional and keyword arguments are passed through to
`io.TextIOWrapper` when opened as text and
ignored otherwise.
`pwd` is the `pwd` parameter to
`ZipFile.open`.

> *Changed in 3.9*: Added support for text and binary modes for open. Default mode is now text.

> *Changed in 3.11.2*: The ``encoding`` parameter can be supplied as a positional argument without causing a :exc:`TypeError`. As it could in 3.9. Code needing to be compatible with unpatched 3.10 and 3.11 versions must pass all :class:`io.TextIOWrapper` arguments, ``encoding`` included, as keywords.
