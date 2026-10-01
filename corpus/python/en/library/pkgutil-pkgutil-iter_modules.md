---
id: "python-en-function-pkgutil-iter_modules"
language: "python"
lang: "en"
category: "function"
name: "iter_modules"
signature: "iter_modules(path=None, prefix='')"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/3/library/pkgutil.html#pkgutil.iter_modules"
license: "PSF"
updated: "2026-10-01"
---

# iter_modules

Yields `ModuleInfo` for all submodules on *path*, or, if
*path* is `None`, all top-level modules on `sys.path`.

*path* should be either `None` or a list of paths to look for modules in.

*prefix* is a string to output on the front of every module name on output.

> **Note**
>
> Only works for a `finder` which defines an `iter_modules()`
> method. This interface is non-standard, so the module also provides
> implementations for `importlib.machinery.FileFinder` and
> `zipimport.zipimporter`.
>

> *Changed in 3.3*: Updated to be based directly on :mod:`importlib` rather than relying on the package internal :pep:`302` import emulation.
