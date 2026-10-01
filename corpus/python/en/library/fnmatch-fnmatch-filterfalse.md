---
id: "python-en-function-fnmatch-filterfalse"
language: "python"
lang: "en"
category: "function"
name: "filterfalse"
signature: "filterfalse(names, pat)"
directive: "function"
module: "fnmatch"
source_url: "https://docs.python.org/3/library/fnmatch.html#fnmatch.filterfalse"
license: "PSF"
updated: "2026-10-01"
---

# filterfalse

Construct a list from those elements of the `iterable` of filename
strings *names* that do not match the pattern string *pat*.
It is the same as `[n for n in names if not fnmatch(n, pat)]`,
but implemented more efficiently.

> *Added in 3.14*
