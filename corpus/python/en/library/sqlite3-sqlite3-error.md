---
id: "python-en-function-sqlite3-error"
language: "python"
lang: "en"
category: "function"
name: "Error"
directive: "exception"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.Error"
license: "PSF"
updated: "2026-10-01"
---

# Error

The base class of the other exceptions in this module.
Use this to catch all errors with one single `except` statement.
`Error` is a subclass of `Exception`.

If the exception originated from within the SQLite library,
the following two attributes are added to the exception:

attribute:: sqlite_errorcode

attribute:: sqlite_errorname
