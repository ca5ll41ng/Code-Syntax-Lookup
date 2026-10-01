---
id: "python-en-function-sqlite3-register_adapter"
language: "python"
lang: "en"
category: "function"
name: "register_adapter"
signature: "register_adapter(type, adapter, /)"
directive: "function"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.register_adapter"
license: "PSF"
updated: "2026-10-01"
---

# register_adapter

Register an *adapter* `callable` to adapt the Python type *type*
into an SQLite type.
The adapter is called with a Python object of type *type* as its sole
argument, and must return a value of a
`type that SQLite natively understands`.
