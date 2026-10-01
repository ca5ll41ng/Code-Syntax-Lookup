---
id: "python-en-function-sqlite3-notsupportederror"
language: "python"
lang: "en"
category: "function"
name: "NotSupportedError"
directive: "exception"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.NotSupportedError"
license: "PSF"
updated: "2026-10-01"
---

# NotSupportedError

Exception raised in case a method or database API is not supported by the
underlying SQLite library. For example, setting *deterministic* to
`True` in `~Connection.create_function`, if the underlying SQLite library
does not support deterministic functions.
`NotSupportedError` is a subclass of `DatabaseError`.
