---
id: "python-en-function-sys-get_lazy_imports_filter"
language: "python"
lang: "en"
category: "function"
name: "get_lazy_imports_filter"
signature: "get_lazy_imports_filter()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.get_lazy_imports_filter"
license: "PSF"
updated: "2026-10-01"
---

# get_lazy_imports_filter

Returns the current lazy imports filter function, or `None` if no
filter is set.

The filter function is called for every potentially lazy import to
determine whether it should actually be lazy. See
`set_lazy_imports_filter` for details on the filter function
signature.

> *Added in 3.15*
