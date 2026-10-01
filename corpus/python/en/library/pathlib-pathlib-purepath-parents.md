---
id: "python-en-function-pathlib-purepath-parents"
language: "python"
lang: "en"
category: "function"
name: "PurePath.parents"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.parents"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.parents

An immutable sequence providing access to the logical ancestors of
the path::

   >>> p = PureWindowsPath('c:/foo/bar/setup.py')
   >>> p.parents[0]
   PureWindowsPath('c:/foo/bar')
   >>> p.parents[1]
   PureWindowsPath('c:/foo')
   >>> p.parents[2]
   PureWindowsPath('c:/')

> *Changed in 3.10*: The parents sequence now supports :term:`slices <slice>` and negative index values.
