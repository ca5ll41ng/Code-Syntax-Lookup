---
id: "python-en-function-sqlite3-register_converter"
language: "python"
lang: "en"
category: "function"
name: "register_converter"
signature: "register_converter(typename, converter, /)"
directive: "function"
module: "sqlite3"
source_url: "https://docs.python.org/3/library/sqlite3.html#sqlite3.register_converter"
license: "PSF"
updated: "2026-10-01"
---

# register_converter

Register the *converter* `callable` to convert SQLite objects of type
*typename* into a Python object of a specific type.
The converter is invoked for all SQLite values of type *typename*;
it is passed a `bytes` object and should return an object of the
desired Python type.
Consult the parameter *detect_types* of
`connect` for information regarding how type detection works.

Note: *typename* and the name of the type in your query are matched
case-insensitively.
