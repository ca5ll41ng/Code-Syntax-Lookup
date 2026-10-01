---
id: "python-en-function-builtins-isinstance"
language: "python"
lang: "en"
category: "function"
name: "isinstance"
signature: "isinstance(object, classinfo, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#isinstance"
license: "PSF"
updated: "2026-10-01"
---

# isinstance

Return `True` if the *object* argument is an instance of the *classinfo*
argument, or of a (direct, indirect, or `virtual`) subclass thereof.  If *object* is not
an object of the given type, the function always returns `False`.
If *classinfo* is a tuple of type objects (or recursively, other such
tuples) or a `types-union` of multiple types, return `True` if
*object* is an instance of any of the types.
If *classinfo* is not a type or tuple of types and such tuples,
a `TypeError` exception is raised. `TypeError` may not be
raised for an invalid type if an earlier check succeeds.

> *Changed in 3.10*: *classinfo* can be a :ref:`types-union`.
