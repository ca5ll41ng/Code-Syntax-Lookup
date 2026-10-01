---
id: "python-en-function-sqlite3-operationalerror"
language: "python"
lang: "en"
category: "function"
name: "OperationalError"
directive: "exception"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.OperationalError"
license: "PSF"
updated: "2026-10-01"
---

# OperationalError

Exception raised for errors that are related to the database's operation,
and not necessarily under the control of the programmer.
For example, the database path is not found,
or a transaction could not be processed.
`OperationalError` is a subclass of `DatabaseError`.
