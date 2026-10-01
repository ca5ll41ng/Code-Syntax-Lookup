---
id: "python-en-function-pathlib-purepath-suffix"
language: "python"
lang: "en"
category: "function"
name: "PurePath.suffix"
directive: "attribute"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.suffix"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.suffix

The last dot-separated portion of the final component, if any::

   >>> PurePosixPath('my/library/setup.py').suffix
   '.py'
   >>> PurePosixPath('my/library.tar.gz').suffix
   '.gz'
   >>> PurePosixPath('my/library').suffix
   ''

This is commonly called the file extension.

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix.
