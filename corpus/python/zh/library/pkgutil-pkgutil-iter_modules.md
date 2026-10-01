---
id: "python-zh-function-pkgutil-iter_modules"
language: "python"
lang: "zh"
category: "function"
name: "iter_modules"
signature: "iter_modules(path=None, prefix='')"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/zh-cn/3/library/pkgutil.html#pkgutil.iter_modules"
license: "PSF"
updated: "2026-10-01"
---

# iter_modules

Yields `ModuleInfo` for all submodules on *path*, or, if
*path* is `None`, all top-level modules on `sys.path`.

*path* 应当为 ``None`` 或一个作为查找模块目标的路径的列表。

*prefix* 是要在输出时输出到每个模块名称之前的字符串。

> **Note**
>
> Only works for a `finder` which defines an `iter_modules()`
> method. This interface is non-standard, so the module also provides
> implementations for `importlib.machinery.FileFinder` and
> `zipimport.zipimporter`.
>

> *Changed in 3.3*: Updated to be based directly on :mod:`importlib` rather than relying on the package internal :pep:`302` import emulation.
