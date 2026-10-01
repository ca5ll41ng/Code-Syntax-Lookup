---
id: "python-en-function-zipfile-path-joinpath"
language: "python"
lang: "en"
category: "function"
name: "Path.joinpath"
signature: "Path.joinpath(*other)"
directive: "method"
module: "zipfile"
source_url: "https://docs.python.org/3/library/zipfile.html#zipfile.Path.joinpath"
license: "PSF"
updated: "2026-10-01"
---

# Path.joinpath

Return a new Path object with each of the *other* arguments
joined. The following are equivalent::

>>> Path(...).joinpath('child').joinpath('grandchild')
>>> Path(...).joinpath('child', 'grandchild')
>>> Path(...) / 'child' / 'grandchild'

> *Changed in 3.10*: Prior to 3.10, ``joinpath`` was undocumented and accepted exactly one parameter.
