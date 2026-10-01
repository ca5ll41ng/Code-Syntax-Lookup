---
id: "python-en-function-sqlite3-sqlite_version_info"
language: "python"
lang: "en"
category: "function"
name: "SQLITE_VERSION_INFO"
directive: "data"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.SQLITE_VERSION_INFO"
license: "PSF"
updated: "2026-10-01"
---

# SQLITE_VERSION_INFO

A named tuple containing the three components of the SQLite library
version that was used for building the module:
*major*, *minor*, and *patch*.
All values are integers.
The components can also be accessed by name,
so `sqlite3.SQLITE_VERSION_INFO[0]` is equivalent to
`sqlite3.SQLITE_VERSION_INFO.major` and so on.
This may be different from the SQLite library actually used at runtime,
which is available as `sqlite_version_info`.

> *Added in next*
