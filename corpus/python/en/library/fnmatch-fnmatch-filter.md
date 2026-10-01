---
id: "python-en-function-fnmatch-filter"
language: "python"
lang: "en"
category: "function"
name: "filter"
signature: "filter(names, pat)"
directive: "function"
module: "fnmatch"
source_url: "https://docs.python.org/3/library/fnmatch.html#fnmatch.filter"
license: "PSF"
updated: "2026-10-01"
---

# filter

Construct a list from those elements of the `iterable` of filename
strings *names* that match the pattern string *pat*.
It is the same as `[n for n in names if fnmatch(n, pat)]`,
but implemented more efficiently.
