---
id: "python-zh-function-pkgutil-iter_importers"
language: "python"
lang: "zh"
category: "function"
name: "iter_importers"
signature: "iter_importers(fullname='')"
directive: "function"
module: "pkgutil"
source_url: "https://docs.python.org/zh-cn/3/library/pkgutil.html#pkgutil.iter_importers"
license: "PSF"
updated: "2026-10-01"
---

# iter_importers

为给定的模块名称产生 :term:`finder` 对象。

If *fullname* contains a `'.'`, the finders will be for the package
containing *fullname*, otherwise they will be all registered top level
finders (i.e. those on both `sys.meta_path` and `sys.path_hooks`).

If the named module is in a package, that package is imported as a side
effect of invoking this function.

如果未指定模块名称，则会产生所有的最高层级查找器。

> *Changed in 3.3*: Updated to be based directly on :mod:`importlib` rather than relying on the package internal :pep:`302` import emulation.
