---
id: "python-zh-function-pathlib-path-resolve"
language: "python"
lang: "zh"
category: "function"
name: "Path.resolve"
signature: "Path.resolve(strict=False)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.Path.resolve"
license: "PSF"
updated: "2026-10-01"
---

# Path.resolve

Make the path absolute, resolving any symlinks.  A new path object is
returned::

   >>> p = Path()
   >>> p
   PosixPath('.')
   >>> p.resolve()
   PosixPath('/home/antoine/pathlib')

"``..``" 组件也将被消除（只有这一种方法这么做）::

   >>> p = Path('docs/../setup.py')
   >>> p.resolve()
   PosixPath('/home/antoine/pathlib/setup.py')

If a path doesn't exist or a symlink loop is encountered, and *strict* is
`True`, `OSError` is raised.  If *strict* is `False`, the path is
resolved as far as possible and any remainder is appended without checking
whether it exists.

> *Changed in 3.6*: The *strict* parameter was added (pre-3.6 behavior is strict).

> *Changed in 3.13*: Symlink loops are treated like other errors: :exc:`OSError` is raised in strict mode, and no exception is raised in non-strict mode. In previous versions, :exc:`RuntimeError` is raised no matter the value of *strict*.
