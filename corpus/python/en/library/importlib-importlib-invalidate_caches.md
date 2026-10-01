---
id: "python-en-function-importlib-invalidate_caches"
language: "python"
lang: "en"
category: "function"
name: "invalidate_caches"
signature: "invalidate_caches()"
directive: "function"
module: "importlib"
source_url: "https://docs.python.org/3/library/importlib.html#importlib.invalidate_caches"
license: "PSF"
updated: "2026-10-01"
---

# invalidate_caches

Invalidate the internal caches of finders stored at
`sys.meta_path`. If a finder implements `invalidate_caches()` then it
will be called to perform the invalidation.  This function should be called
if any modules are created/installed while your program is running to
guarantee all finders will notice the new module's existence.

> *Added in 3.3*

> *Changed in 3.10*: Namespace packages created/installed in a different :data:`sys.path` location after the same namespace was already imported are noticed.
