---
id: "python-en-function-builtins-map"
language: "python"
lang: "en"
category: "function"
name: "map"
signature: "map(function, iterable, /, *iterables, strict=False)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#map"
license: "PSF"
updated: "2026-10-01"
---

# map

Return an iterator that applies *function* to every item of *iterable*,
yielding the results.  If additional *iterables* arguments are passed,
*function* must take that many arguments and is applied to the items from all
iterables in parallel.  With multiple iterables, the iterator stops when the
shortest iterable is `exhausted`.  If *strict* is `True` and one of the
iterables is exhausted before the others, a `ValueError` is raised. For
cases where the function inputs are already arranged into argument tuples,
see `itertools.starmap`.

> *Changed in 3.14*: Added the *strict* parameter.
