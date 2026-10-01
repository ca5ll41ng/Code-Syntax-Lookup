---
id: "python-en-function-pathlib-purepath-match"
language: "python"
lang: "en"
category: "function"
name: "PurePath.match"
signature: "PurePath.match(pattern, *, case_sensitive=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.match"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.match

Match this path against the provided non-recursive glob-style pattern.
Return `True` if matching is successful, `False` otherwise.

This method is similar to `~PurePath.full_match`, but empty patterns
aren't allowed (`ValueError` is raised), the recursive wildcard
"`**`" isn't supported (it acts like non-recursive "`*`"), and if a
relative pattern is provided, then matching is done from the right::

   >>> PurePath('a/b.py').match('*.py')
   True
   >>> PurePath('/a/b/c.py').match('b/*.py')
   True
   >>> PurePath('/a/b/c.py').match('a/*.py')
   False

> *Changed in 3.12*: The *pattern* parameter accepts a :term:`path-like object`.

> *Changed in 3.12*: The *case_sensitive* parameter was added.
