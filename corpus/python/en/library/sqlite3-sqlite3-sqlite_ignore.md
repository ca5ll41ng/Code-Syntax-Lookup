---
id: "python-en-function-sqlite3-sqlite_ignore"
language: "python"
lang: "en"
category: "function"
name: "SQLITE_IGNORE"
directive: "data"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.SQLITE_IGNORE"
license: "PSF"
updated: "2026-10-01"
---

# SQLITE_IGNORE

Flags that should be returned by the *authorizer_callback* `callable`
passed to `Connection.set_authorizer`, to indicate whether:

* Access is allowed (`SQLITE_OK`),
* The SQL statement should be aborted with an error (`SQLITE_DENY`)
* The column should be treated as a `NULL` value (`SQLITE_IGNORE`)
