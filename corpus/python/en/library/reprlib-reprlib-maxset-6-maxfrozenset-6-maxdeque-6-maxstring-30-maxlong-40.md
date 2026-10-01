---
id: "python-en-function-reprlib-maxset-6-maxfrozenset-6-maxdeque-6-maxstring-30-maxlong-40"
language: "python"
lang: "en"
category: "function"
name: "maxset=6, maxfrozenset=6, maxdeque=6, maxstring=30, maxlong=40, \\"
directive: "class"
module: "reprlib"
source_url: "https://docs.python.org/3/library/reprlib.html#reprlib.maxset=6, maxfrozenset=6, maxdeque=6, maxstring=30, maxlong=40, \\"
license: "PSF"
updated: "2026-10-01"
---

# maxset=6, maxfrozenset=6, maxdeque=6, maxstring=30, maxlong=40, \

Class which provides formatting services useful in implementing functions
similar to the built-in `repr`; size limits for  different object types
are added to avoid the generation of representations which are excessively long.

The keyword arguments of the constructor can be used as a shortcut to set the
attributes of the `Repr` instance. Which means that the following
initialization::

   aRepr = reprlib.Repr(maxlevel=3)

Is equivalent to::

   aRepr = reprlib.Repr()
   aRepr.maxlevel = 3

See section `Repr Objects`_ for more information about `Repr`
attributes.

> *Changed in 3.12*: Allow attributes to be set via keyword arguments.
