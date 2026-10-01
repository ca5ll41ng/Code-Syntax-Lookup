---
id: "python-en-function-gc-is_tracked"
language: "python"
lang: "en"
category: "function"
name: "is_tracked"
signature: "is_tracked(obj)"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.is_tracked"
license: "PSF"
updated: "2026-10-01"
---

# is_tracked

Returns `True` if the object is currently tracked by the garbage collector,
`False` otherwise.  As a general rule, instances of atomic types aren't
tracked and instances of non-atomic types (containers, user-defined
objects...) are.  However, some type-specific optimizations can be present
in order to suppress the garbage collector footprint of simple instances
(e.g. dicts containing only atomic keys and values)::

   >>> gc.is_tracked(0)
   False
   >>> gc.is_tracked("a")
   False
   >>> gc.is_tracked([])
   True
   >>> gc.is_tracked({})
   False
   >>> gc.is_tracked({"a": 1})
   True

> *Added in 3.1*
