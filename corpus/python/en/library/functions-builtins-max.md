---
id: "python-en-function-builtins-max"
language: "python"
lang: "en"
category: "function"
name: "max"
signature: "max(iterable, /, *, key=None)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#max"
license: "PSF"
updated: "2026-10-01"
---

# max

Return the largest item in an iterable or the largest of two or more
arguments.

If one positional argument is provided, it should be an `iterable`.
The largest item in the iterable is returned.  If two or more positional
arguments are provided, the largest of the positional arguments is
returned.

There are two optional keyword-only arguments. The *key* argument specifies
a one-argument ordering function like that used for `list.sort`. The
*default* argument specifies an object to return if the provided iterable is
empty. If the iterable is empty and *default* is not provided, a
`ValueError` is raised.

If multiple items are maximal, the function returns the first one
encountered.  This is consistent with other sort-stability preserving tools
such as `sorted(iterable, key=keyfunc, reverse=True)[0]` and
`heapq.nlargest(1, iterable, key=keyfunc)`.

> *Changed in 3.4*: Added the *default* keyword-only parameter.

> *Changed in 3.8*: The *key* can be ``None``.
