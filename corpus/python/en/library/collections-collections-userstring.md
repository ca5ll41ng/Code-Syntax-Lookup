---
id: "python-en-function-collections-userstring"
language: "python"
lang: "en"
category: "function"
name: "UserString"
signature: "UserString(seq)"
directive: "class"
module: "collections"
source_url: "https://docs.python.org/3/library/collections.html#collections.UserString"
license: "PSF"
updated: "2026-10-01"
---

# UserString

Class that simulates a string object.  The instance's
content is kept in a regular string object, which is accessible via the
`data` attribute of `UserString` instances.  The instance's
contents are initially set to a copy of *seq*.  The *seq* argument can
be any object which can be converted into a string using the built-in
`str` function.

In addition to supporting the methods and operations of strings,
`UserString` instances provide the following attribute:

attribute:: data

> *Changed in 3.5*: New methods ``__getnewargs__``, ``__rmod__``, ``casefold``, ``format_map``, ``isprintable``, and ``maketrans``.
