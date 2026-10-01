---
id: "python-zh-function-dbm-open"
language: "python"
lang: "zh"
category: "function"
name: "open"
signature: "open(file, flag='r', mode=0o666)"
directive: "function"
module: "dbm"
source_url: "https://docs.python.org/zh-cn/3/library/dbm.html#dbm.open"
license: "PSF"
updated: "2026-10-01"
---

# open

打开一个数据库并返回相应的数据库对象。

:param file:
   The database file to open.

   If the database file already exists, the `whichdb` function is used to
   determine its type and the appropriate module is used; if it does not exist,
   the first submodule listed above that can be imported is used.
:type file: `path-like object`

:param str flag:
   * `'r'` (default): flag_r
   * `'w'`: flag_w
   * `'c'`: flag_c
   * `'n'`: flag_n

:param int mode:
   mode_param_doc

> *Changed in 3.11*: *file* accepts a :term:`path-like object`.
