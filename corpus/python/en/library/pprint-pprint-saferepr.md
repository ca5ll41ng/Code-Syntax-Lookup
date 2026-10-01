---
id: "python-en-function-pprint-saferepr"
language: "python"
lang: "en"
category: "function"
name: "saferepr"
signature: "saferepr(object)"
directive: "function"
module: "pprint"
source_url: "https://docs.python.org/3/library/pprint.html#pprint.saferepr"
license: "PSF"
updated: "2026-10-01"
---

# saferepr

Return a string representation of *object*, protected against recursion in
some common data structures, namely instances of `dict`, `list`
and `tuple` or subclasses whose `__repr__` has not been overridden.  If the
representation of object exposes a recursive entry, the recursive reference
will be represented as `<Recursion on typename with id=number>`.  The
representation is not otherwise formatted.

>>> pprint.saferepr(stuff)
"[<Recursion on list with id=...>, 'spam', 'eggs', 'lumberjack', 'knights', 'ni']"
