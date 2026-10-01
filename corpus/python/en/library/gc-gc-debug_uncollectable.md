---
id: "python-en-function-gc-debug_uncollectable"
language: "python"
lang: "en"
category: "function"
name: "DEBUG_UNCOLLECTABLE"
directive: "data"
module: "gc"
source_url: "https://docs.python.org/3/library/gc.html#gc.DEBUG_UNCOLLECTABLE"
license: "PSF"
updated: "2026-10-01"
---

# DEBUG_UNCOLLECTABLE

Print information of uncollectable objects found (objects which are not
reachable but cannot be freed by the collector).  These objects will be added
to the `garbage` list.

> *Changed in 3.2*: Also print the contents of the :data:`garbage` list at :term:`interpreter shutdown`, if it isn't empty.
