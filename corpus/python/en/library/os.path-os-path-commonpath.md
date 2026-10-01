---
id: "python-en-function-os-path-commonpath"
language: "python"
lang: "en"
category: "function"
name: "commonpath"
signature: "commonpath(paths)"
directive: "function"
module: "os.path"
source_url: "https://docs.python.org/3/library/os.path.html#os.path.commonpath"
license: "PSF"
updated: "2026-10-01"
---

# commonpath

Return the longest common sub-path of each pathname in the iterable
*paths*.  Raise `ValueError` if *paths* contain both absolute
and relative pathnames, if *paths* are on different drives, or
if *paths* is empty.  Unlike `commonprefix`, this returns a
valid path.

> *Added in 3.5*

> *Changed in 3.6*: Accepts a sequence of :term:`path-like objects <path-like object>`.

> *Changed in 3.13*: Any iterable can now be passed, rather than just sequences.
