---
id: "python-en-function-dbm-open"
language: "python"
lang: "en"
category: "function"
name: "open"
signature: "open(file, flag='r', mode=0o666)"
directive: "function"
module: "dbm"
source_url: "https://docs.python.org/3/library/dbm.html#dbm.open"
license: "PSF"
updated: "2026-10-01"
---

# open

Open a database and return the corresponding database object.

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
