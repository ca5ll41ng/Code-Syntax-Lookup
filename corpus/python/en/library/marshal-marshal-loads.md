---
id: "python-en-function-marshal-loads"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B302"],"cwe":["CWE-502"],"note":"Deserialization with the marshal module is possibly dangerous."}
name: "loads"
signature: "loads(bytes, /, *, allow_code=True)"
directive: "function"
module: "marshal"
source_url: "https://docs.python.org/3/library/marshal.html#marshal.loads"
license: "PSF"
updated: "2026-10-01"
---

# loads

Convert the `bytes-like object` to a value.  If no valid value is found, raise
`EOFError`, `ValueError` or `TypeError`.
`Code objects` are only supported if *allow_code* is true.
Extra bytes in the input are ignored.

audit-event:: marshal.loads bytes marshal.load

> *Changed in 3.10*: This call used to raise a ``code.__new__`` audit event for each code object. Now it raises a single ``marshal.loads`` event for the entire load operation.

> *Changed in 3.13*: Added the *allow_code* parameter.
