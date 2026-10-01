---
id: "python-en-function-builtins-slice"
language: "python"
lang: "en"
category: "function"
name: "slice"
signature: "slice(stop, /)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#slice"
license: "PSF"
updated: "2026-10-01"
---

# slice

Return a `slice` object representing the set of indices specified by
`range(start, stop, step)`.  The *start* and *step* arguments default to
`None`.

Slice objects are also generated when `slicing syntax`
is used.  For example: `a[start:stop:step]` or `a[start:stop, i]`.

See `itertools.islice` for an alternate version that returns an
`iterator`.

attribute:: slice.start

> *Changed in 3.12*: Slice objects are now :term:`hashable` (provided :attr:`~slice.start`, :attr:`~slice.stop`, and :attr:`~slice.step` are hashable).
