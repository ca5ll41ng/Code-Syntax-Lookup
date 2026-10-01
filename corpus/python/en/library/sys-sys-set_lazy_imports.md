---
id: "python-en-function-sys-set_lazy_imports"
language: "python"
lang: "en"
category: "function"
name: "set_lazy_imports"
signature: "set_lazy_imports(mode)"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.set_lazy_imports"
license: "PSF"
updated: "2026-10-01"
---

# set_lazy_imports

Sets the global lazy imports mode. The *mode* parameter must be one of
the following strings:

* `"normal"`: Only imports explicitly marked with the `lazy` keyword
  are lazy
* `"all"`: All top-level imports become potentially lazy

This function is intended for advanced users who need to control lazy
imports across their entire application. Library developers should
generally not use this function as it affects the runtime execution of
applications.

In addition to the mode, lazy imports can be controlled via the filter
provided by `set_lazy_imports_filter`.

See also `get_lazy_imports` and PEP 810.

> *Added in 3.15*
