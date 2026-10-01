---
id: "python-en-function-gc-is_finalized"
language: "python"
lang: "en"
category: "function"
name: "is_finalized"
signature: "is_finalized(obj)"
directive: "function"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.is_finalized"
license: "PSF"
updated: "2026-10-01"
---

# is_finalized

Returns `True` if the given object has been finalized by the
garbage collector, `False` otherwise. ::

   >>> x = None
   >>> class Lazarus:
   ...     def __del__(self):
   ...         global x
   ...         x = self
   ...
   >>> lazarus = Lazarus()
   >>> gc.is_finalized(lazarus)
   False
   >>> del lazarus
   >>> gc.is_finalized(x)
   True

> *Added in 3.9*
