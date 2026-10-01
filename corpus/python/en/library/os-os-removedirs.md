---
id: "python-en-function-os-removedirs"
language: "python"
lang: "en"
category: "function"
name: "removedirs"
signature: "removedirs(name)"
directive: "function"
module: "os"
source_url: "https://docs.python.org/3/library/os.html#os.removedirs"
license: "PSF"
updated: "2026-10-01"
---

# removedirs

Remove directories recursively.  Works like `rmdir` except that, if the
leaf directory is successfully removed, `removedirs`  tries to
successively remove every parent directory mentioned in  *path* until an error
is raised (which is ignored, because it generally means that a parent directory
is not empty). For example, `os.removedirs('foo/bar/baz')` will first remove
the directory `'foo/bar/baz'`, and then remove `'foo/bar'` and `'foo'` if
they are empty. Raises `OSError` if the leaf directory could not be
successfully removed.

audit-event:: os.remove path,dir_fd os.removedirs

> *Changed in 3.6*: Accepts a :term:`path-like object`.
