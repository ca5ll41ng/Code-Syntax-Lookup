---
id: "python-en-function-dbm-whichdb"
language: "python"
lang: "en"
category: "function"
name: "whichdb"
signature: "whichdb(filename)"
directive: "function"
module: "dbm"
source_url: "https://docs.python.org/3/library/dbm.html#dbm.whichdb"
license: "PSF"
updated: "2026-10-01"
---

# whichdb

This function attempts to guess which of the several simple database modules
available --- `dbm.sqlite3`, `dbm.gnu`, `dbm.ndbm`,
or `dbm.dumb` --- should be used to open a given file.

Return one of the following values:

* `None` if the file can't be opened because it's unreadable or doesn't exist
* the empty string (`''`) if the file's format can't be guessed
* a string containing the required module name, such as `'dbm.ndbm'` or `'dbm.gnu'`

> *Changed in 3.11*: *filename* accepts a :term:`path-like object`.
