---
id: "python-en-function-pathlib-purepath-full_match"
language: "python"
lang: "en"
category: "function"
name: "PurePath.full_match"
signature: "PurePath.full_match(pattern, *, case_sensitive=None)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.PurePath.full_match"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.full_match

Match this path against the provided glob-style pattern.  Return `True`
if matching is successful, `False` otherwise.  For example::

   >>> PurePath('a/b.py').full_match('a/*.py')
   True
   >>> PurePath('a/b.py').full_match('*.py')
   False
   >>> PurePath('/a/b/c.py').full_match('/a/**')
   True
   >>> PurePath('/a/b/c.py').full_match('**/*.py')
   True

> **Seealso**
>
> `pathlib-pattern-language` documentation.
>

As with other methods, case-sensitivity follows platform defaults::

   >>> PurePosixPath('b.py').full_match('*.PY')
   False
   >>> PureWindowsPath('b.py').full_match('*.PY')
   True

Set *case_sensitive* to `True` or `False` to override this behaviour.

> *Added in 3.13*
