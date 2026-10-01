---
id: "python-en-function-gc-collect"
language: "python"
lang: "en"
category: "function"
name: "collect"
signature: "collect(generation=2)"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.collect"
license: "PSF"
updated: "2026-10-01"
---

# collect

With no arguments, run a full collection.  The optional argument *generation*
may be an integer specifying which generation to collect (from 0 to 2).  A
`ValueError` is raised if the generation number is invalid. The sum of
collected objects and uncollectable objects is returned.

The free lists maintained for a number of built-in types are cleared
whenever a full collection or collection of the highest generation (2)
is run.  Not all items in some free lists may be freed due to the
particular implementation, in particular `float`.

The effect of calling `gc.collect()` while the interpreter is already
performing a collection is undefined.

> *Changed in 3.14*: ``generation=1`` performs an increment of collection.

> *Changed in 3.14.5*: ``generation=1`` performs collection of the middle generation.
