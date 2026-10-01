---
id: "python-en-function-builtins-sorted"
language: "python"
lang: "en"
category: "function"
name: "sorted"
signature: "sorted(iterable, /, *, key=None, reverse=False)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#sorted"
license: "PSF"
updated: "2026-10-01"
---

# sorted

Return a new sorted list from the items in *iterable*.

Has two optional arguments which must be specified as keyword arguments.

*key* specifies a function of one argument that is used to extract a comparison
key from each element in *iterable* (for example, `key=str.lower`).  The
default value is `None` (compare the elements directly).

*reverse* is a boolean value.  If set to `True`, then the list elements are
sorted as if each comparison were reversed.

Use `functools.cmp_to_key` to convert an old-style *cmp* function to a
*key* function.

The built-in `sorted` function is guaranteed to be stable. A sort is
stable if it guarantees not to change the relative order of elements that
compare equal --- this is helpful for sorting in multiple passes (for
example, sort by department, then by salary grade).

The sort algorithm uses only `<` comparisons between items.  While
defining an `~object.__lt__` method will suffice for sorting,
`8` recommends that all six `rich comparisons` be implemented.  This will help avoid bugs when using
the same data with other ordering tools such as `max` that rely
on a different underlying method.  Implementing all six comparisons
also helps avoid confusion for mixed type comparisons which can call
the reflected `~object.__gt__` method.

For sorting examples and a brief sorting tutorial, see `sortinghowto`.
