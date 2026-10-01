---
id: "python-en-function-builtins-min"
language: "python"
lang: "en"
category: "function"
name: "min"
signature: "min(iterable, /, *, key=None)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#min"
license: "PSF"
updated: "2026-10-01"
---

# min

Return the smallest item in an iterable or the smallest of two or more
arguments.

If one positional argument is provided, it should be an `iterable`.
The smallest item in the iterable is returned.  If two or more positional
arguments are provided, the smallest of the positional arguments is
returned.

There are two optional keyword-only arguments. The *key* argument specifies
a one-argument ordering function like that used for `list.sort`. The
*default* argument specifies an object to return if the provided iterable is
empty. If the iterable is empty and *default* is not provided, a
`ValueError` is raised.

If multiple items are minimal, the function returns the first one
encountered.  This is consistent with other sort-stability preserving tools
such as `sorted(iterable, key=keyfunc)[0]` and `heapq.nsmallest(1,
iterable, key=keyfunc)`.

> *Changed in 3.4*: Added the *default* keyword-only parameter.

> *Changed in 3.8*: The *key* can be ``None``.
