---
id: "python-en-function-sys-set_lazy_imports_filter"
language: "python"
lang: "en"
category: "function"
name: "set_lazy_imports_filter"
signature: "set_lazy_imports_filter(filter)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.set_lazy_imports_filter"
license: "PSF"
updated: "2026-10-01"
---

# set_lazy_imports_filter

Sets the lazy imports filter callback. The *filter* parameter must be a
callable or `None` to clear the filter.

The filter function is called for every potentially lazy import to
determine whether it should actually be lazy. It should have the following
signature::

   def filter(importing_module: str, imported_module: str,
              fromlist: tuple[str, ...] | None) -> bool

The function is called with three positional arguments:

* *importing_module* is the name of the module doing the import
* *imported_module* is the resolved name of the module being imported
  (for example, `lazy from .spam import eggs` passes
  `package.spam`)
* *fromlist* is the tuple of names being imported (for `from ... import`
  statements), or `None` for regular imports

The filter should return `True` to allow the import to be lazy, or
`False` to force an eager import.

This is an advanced feature intended for specialized users who need
fine-grained control over lazy import behavior.

See also `get_lazy_imports_filter` and PEP 810.

> *Added in 3.15*
