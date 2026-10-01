---
id: "python-en-function-dbm-bdb_version_info"
language: "python"
lang: "en"
category: "function"
name: "BDB_VERSION_INFO"
directive: "data"
module: "dbm"
source_url: "https://docs.python.org/3/library/dbm.html#dbm.BDB_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# BDB_VERSION_INFO

A named tuple containing the three components of the Berkeley DB library
version that was used for building the module:
*major*, *minor*, and *patch*.
All values are integers.
The components can also be accessed by name,
so `dbm.ndbm.BDB_VERSION_INFO[0]` is equivalent to
`dbm.ndbm.BDB_VERSION_INFO.major` and so on.
This may be different from the Berkeley DB library actually used at runtime,
which is available as `bdb_version_info`.
Only available if `library` is `'Berkeley DB'`.

> *Added in next*
