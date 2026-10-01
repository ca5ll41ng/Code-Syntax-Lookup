---
id: "python-en-function-pathlib-purepath-with_suffix"
language: "python"
lang: "en"
category: "function"
name: "PurePath.with_suffix"
signature: "PurePath.with_suffix(suffix)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.with_suffix"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.with_suffix

Return a new path with the `suffix` changed.  If the original path
doesn't have a suffix, the new *suffix* is appended instead.  If the
*suffix* is an empty string, the original suffix is removed::

   >>> p = PureWindowsPath('c:/Downloads/pathlib.tar.gz')
   >>> p.with_suffix('.bz2')
   PureWindowsPath('c:/Downloads/pathlib.tar.bz2')
   >>> p = PureWindowsPath('README')
   >>> p.with_suffix('.txt')
   PureWindowsPath('README.txt')
   >>> p = PureWindowsPath('README.txt')
   >>> p.with_suffix('')
   PureWindowsPath('README')

> *Changed in 3.14*: A single dot ("``.``") is considered a valid suffix. In previous versions, :exc:`ValueError` is raised if a single dot is supplied.
