---
id: "python-zh-function-dbm-whichdb"
language: "python"
lang: "zh"
category: "function"
name: "whichdb"
signature: "whichdb(filename)"
directive: "function"
module: "dbm"
source_url: "https://docs.python.org/zh-cn/3/library/dbm.html#dbm.whichdb"
license: "PSF"
updated: "2026-10-01"
---

# whichdb

This function attempts to guess which of the several simple database modules
available --- `dbm.sqlite3`, `dbm.gnu`, `dbm.ndbm`,
or `dbm.dumb` --- should be used to open a given file.

返回下列值中的一个：

* `None` if the file can't be opened because it's unreadable or doesn't exist
* the empty string (`''`) if the file's format can't be guessed
* a string containing the required module name, such as `'dbm.ndbm'` or `'dbm.gnu'`

> *Changed in 3.11*: *filename* accepts a :term:`path-like object`.
