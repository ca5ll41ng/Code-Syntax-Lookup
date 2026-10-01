---
id: "python-zh-function-pkgutil-walk_packages"
language: "python"
lang: "zh"
category: "function"
name: "walk_packages"
signature: "walk_packages(path=None, prefix='', onerror=None)"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/zh-cn/3/library/pkgutil.html#pkgutil.walk_packages"
license: "PSF"
updated: "2026-10-01"
---

# walk_packages

Yields `ModuleInfo` for all modules recursively on
*path*, or, if *path* is `None`, all accessible modules.

*path* 应当为 ``None`` 或一个作为查找模块目标的路径的列表。

*prefix* 是要在输出时输出到每个模块名称之前的字符串。

Note that this function must import all *packages* (*not* all modules!) on
the given *path*, in order to access the `__path__` attribute to find
submodules.

*onerror* is a function which gets called with one argument (the name of the
package which was being imported) if any exception occurs while trying to
import a package.  If no *onerror* function is supplied, `ImportError`\s
are caught and ignored, while all other exceptions are propagated,
terminating the search.

示例::

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
