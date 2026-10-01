---
id: "python-en-function-zipfile-path-read_text"
language: "python"
lang: "en"
category: "function"
name: "Path.read_text"
signature: "Path.read_text(*, **)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.Path.read_text"
license: "PSF"
updated: "2026-10-01"
---

# Path.read_text

Read the current file as unicode text. Positional and
keyword arguments are passed through to
`io.TextIOWrapper` (except `buffer`, which is
implied by the context).

> *Changed in 3.11.2*: The ``encoding`` parameter can be supplied as a positional argument without causing a :exc:`TypeError`. As it could in 3.9. Code needing to be compatible with unpatched 3.10 and 3.11 versions must pass all :class:`io.TextIOWrapper` arguments, ``encoding`` included, as keywords.
