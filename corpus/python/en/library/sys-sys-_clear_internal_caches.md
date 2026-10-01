---
id: "python-en-function-sys-_clear_internal_caches"
language: "python"
lang: "en"
category: "function"
name: "_clear_internal_caches"
signature: "_clear_internal_caches()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys._clear_internal_caches"
license: "PSF"
updated: "2026-10-01"
---

# _clear_internal_caches

Clear all internal performance-related caches. Use this function *only* to
release unnecessary references and memory blocks when hunting for leaks.

> *Added in 3.13*

> *Changed in 3.16*: The type cache is no longer cleared, as it is now implemented per-type.
