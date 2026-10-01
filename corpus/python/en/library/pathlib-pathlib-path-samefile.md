---
id: "python-en-function-pathlib-path-samefile"
language: "python"
lang: "en"
category: "function"
name: "Path.samefile"
signature: "Path.samefile(other_path)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/3/library/pathlib.html#pathlib.Path.samefile"
license: "PSF"
updated: "2026-10-01"
---

# Path.samefile

Return whether this path points to the same file as *other_path*, which
can be either a Path object, or a string.  The semantics are similar
to `os.path.samefile` and `os.path.samestat`.

An `OSError` can be raised if either file cannot be accessed for some
reason.

::

   >>> p = Path('spam')
   >>> q = Path('eggs')
   >>> p.samefile(q)
   False
   >>> p.samefile('spam')
   True

> *Added in 3.5*
