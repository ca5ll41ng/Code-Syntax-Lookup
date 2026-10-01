---
id: "python-en-function-sys-lazy_modules"
language: "python"
lang: "en"
category: "function"
name: "lazy_modules"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.lazy_modules"
license: "PSF"
updated: "2026-10-01"
---

# lazy_modules

A `set` of fully qualified module name strings that have been lazily
imported in the current interpreter but not yet loaded.
When a lazily imported module is accessed for the first time, its name is
typically removed from this set.

The set may contain some additional strings.
It is intended for debugging and introspection, and consumers are expected
to verify each entry's status.

impl-detail::

See also `set_lazy_imports` and PEP 810.

> *Added in 3.15*
