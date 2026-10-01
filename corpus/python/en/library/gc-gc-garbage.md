---
id: "python-en-function-gc-garbage"
language: "python"
lang: "en"
category: "function"
name: "garbage"
directive: "data"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.garbage"
license: "PSF"
updated: "2026-10-01"
---

# garbage

A list of objects which the collector found to be unreachable but could
not be freed (uncollectable objects).  Starting with Python 3.4, this
list should be empty most of the time, except when using instances of
C extension types with a non-`NULL` `tp_del` slot.

If `DEBUG_SAVEALL` is set, then all unreachable objects will be
added to this list rather than freed.

> *Changed in 3.2*: If this list is non-empty at :term:`interpreter shutdown`, a :exc:`ResourceWarning` is emitted, which is silent by default.  If :const:`DEBUG_UNCOLLECTABLE` is set, in addition all uncollectable objects are printed.

> *Changed in 3.4*: Following :pep:`442`, objects with a :meth:`~object.__del__` method don't end up in :data:`gc.garbage` anymore.
