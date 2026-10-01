---
id: "python-en-function-doctest-debug_src"
language: "python"
lang: "en"
category: "function"
name: "debug_src"
signature: "debug_src(src, pm=False, globs=None)"
directive: "function"
module: "doctest"
source_url: "https://docs.python.org/3/library/doctest.html#doctest.debug_src"
license: "PSF"
updated: "2026-10-01"
---

# debug_src

Debug the doctests in a string.

This is like function `debug` above, except that a string containing
doctest examples is specified directly, via the *src* argument.

Optional argument *pm* has the same meaning as in function `debug` above.

Optional argument *globs* gives a dictionary to use as both local and global
execution context.  If not specified, or `None`, an empty dictionary is used.
If specified, a shallow copy of the dictionary is used.
