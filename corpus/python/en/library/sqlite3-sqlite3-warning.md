---
id: "python-en-function-sqlite3-warning"
language: "python"
lang: "en"
category: "function"
name: "Warning"
directive: "exception"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.Warning"
license: "PSF"
updated: "2026-10-01"
---

# Warning

This exception is not currently raised by the `sqlite3` module,
but may be raised by applications using `sqlite3`,
for example if a user-defined function truncates data while inserting.
`Warning` is a subclass of `Exception`.
