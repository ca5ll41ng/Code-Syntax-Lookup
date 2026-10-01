---
id: "python-en-function-builtins-filter"
language: "python"
lang: "en"
category: "function"
name: "filter"
signature: "filter(function, iterable, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#filter"
license: "PSF"
updated: "2026-10-01"
---

# filter

Construct an iterator from those elements of *iterable* for which *function*
is true.  *iterable* may be either a sequence, a container which
supports iteration, or an iterator.  If *function* is `None`, the identity
function is assumed, that is, all elements of *iterable* that are false are
removed.

Note that `filter(function, iterable)` is equivalent to the generator
expression `(item for item in iterable if function(item))` if function is
not `None` and `(item for item in iterable if item)` if function is
`None`.

See `itertools.filterfalse` for the complementary function that returns
elements of *iterable* for which *function* is false.
