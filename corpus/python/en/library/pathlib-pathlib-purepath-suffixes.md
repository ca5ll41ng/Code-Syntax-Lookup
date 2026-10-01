---
id: "python-en-function-pathlib-purepath-suffixes"
language: "python"
lang: "en"
category: "function"
name: "PurePath.suffixes"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.suffixes"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.suffixes

A list of the path's suffixes, often called file extensions::

   >>> PurePosixPath('my/library.tar.gar').suffixes
   ['.tar', '.gar']
   >>> PurePosixPath('my/library.tar.gz').suffixes
   ['.tar', '.gz']
   >>> PurePosixPath('my/library').suffixes
   []

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix.
