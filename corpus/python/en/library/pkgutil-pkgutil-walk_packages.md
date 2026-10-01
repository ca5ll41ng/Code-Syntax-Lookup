---
id: "python-en-function-pkgutil-walk_packages"
language: "python"
lang: "en"
category: "function"
name: "walk_packages"
signature: "walk_packages(path=None, prefix='', onerror=None)"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/3/library/pkgutil.html#pkgutil.walk_packages"
license: "PSF"
updated: "2026-10-01"
---

# walk_packages

Yields `ModuleInfo` for all modules recursively on
*path*, or, if *path* is `None`, all accessible modules.

*path* should be either `None` or a list of paths to look for modules in.

*prefix* is a string to output on the front of every module name on output.

Note that this function must import all *packages* (*not* all modules!) on
the given *path*, in order to access the `__path__` attribute to find
submodules.

*onerror* is a function which gets called with one argument (the name of the
package which was being imported) if any exception occurs while trying to
import a package.  If no *onerror* function is supplied, `ImportError`\s
are caught and ignored, while all other exceptions are propagated,
terminating the search.

Examples::

   # list all modules python can access
   walk_packages()

   # list all submodules of ctypes
   walk_packages(ctypes.__path__, ctypes.__name__ + '.')

> **Note**
>
> Only works for a `finder` which defines an `iter_modules()`
> method. This interface is non-standard, so the module also provides
> implementations for `importlib.machinery.FileFinder` and
> `zipimport.zipimporter`.
>

> *Changed in 3.3*: Updated to be based directly on :mod:`importlib` rather than relying on the package internal :pep:`302` import emulation.
