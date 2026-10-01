---
id: "python-en-function-functools-cmp_to_key"
language: "python"
lang: "en"
category: "function"
name: "cmp_to_key"
signature: "cmp_to_key(func)"
directive: "function"
module: "functools"
source_url: "https://docs.python.org/3/library/functools.html#functools.cmp_to_key"
license: "PSF"
updated: "2026-10-01"
---

# cmp_to_key

Transform an old-style comparison function to a `key function`.  Used
with tools that accept key functions (such as `sorted`, `min`,
`max`, `heapq.nlargest`, `heapq.nsmallest`,
`itertools.groupby`).  This function is primarily used as a transition
tool for programs being converted from Python 2 which supported the use of
comparison functions.

A comparison function is any callable that accepts two arguments, compares them,
and returns a negative number for less-than, zero for equality, or a positive
number for greater-than.  A key function is a callable that accepts one
argument and returns another value to be used as the sort key.

Example::

    sorted(iterable, key=cmp_to_key(locale.strcoll))  # locale-aware sort order

For sorting examples and a brief sorting tutorial, see `sortinghowto`.

> *Added in 3.2*
