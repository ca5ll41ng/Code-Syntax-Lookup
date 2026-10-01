---
id: "python-en-function-sys-get_lazy_imports"
language: "python"
lang: "en"
category: "function"
name: "get_lazy_imports"
signature: "get_lazy_imports()"
directive: "function"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.get_lazy_imports"
license: "PSF"
updated: "2026-10-01"
---

# get_lazy_imports

Returns the current lazy imports mode as a string.

* `"normal"`: Only imports explicitly marked with the `lazy` keyword
  are lazy
* `"all"`: All top-level imports are potentially lazy

See also `set_lazy_imports` and PEP 810.

> *Added in 3.15*
