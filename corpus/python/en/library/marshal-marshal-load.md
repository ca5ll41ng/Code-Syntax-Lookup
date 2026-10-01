---
id: "python-en-function-marshal-load"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B302"],"cwe":["CWE-502"],"note":"Deserialization with the marshal module is possibly dangerous."}
name: "load"
signature: "load(file, /, *, allow_code=True)"
directive: "function"
module: "marshal"
source_url: "https://docs.python.org/3/library/marshal.html#marshal.load"
license: "PSF"
updated: "2026-10-01"
---

# load

Read one value from the open file and return it.  If no valid value is read
(e.g. because the data has a different Python version's incompatible marshal
format), raise `EOFError`, `ValueError` or `TypeError`.
`Code objects` are only supported if *allow_code* is true.
The file must be a readable `binary file`.

audit-event:: marshal.load "" marshal.load

> **Note**
>
> If an object containing an unsupported type was marshalled with `dump`,
> `load` will substitute `None` for the unmarshallable type.
>

> *Changed in 3.10*: This call used to raise a ``code.__new__`` audit event for each code object. Now it raises a single ``marshal.load`` event for the entire load operation.

> *Changed in 3.13*: Added the *allow_code* parameter.
