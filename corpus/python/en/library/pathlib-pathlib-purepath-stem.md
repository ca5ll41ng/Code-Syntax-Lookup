---
id: "python-en-function-pathlib-purepath-stem"
language: "python"
lang: "en"
category: "function"
name: "PurePath.stem"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.stem"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.stem

The final path component, without its suffix::

   >>> PurePosixPath('my/library.tar.gz').stem
   'library.tar'
   >>> PurePosixPath('my/library.tar').stem
   'library'
   >>> PurePosixPath('my/library').stem
   'library'

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix.
