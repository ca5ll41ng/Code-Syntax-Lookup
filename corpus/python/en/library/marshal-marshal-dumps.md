---
id: "python-en-function-marshal-dumps"
language: "python"
lang: "en"
category: "function"
name: "dumps"
signature: "dumps(value, version=version, /, *, allow_code=True)"
directive: "function"
module: "marshal"
source_url: "https://docs.python.org/3/library/marshal.html#marshal.dumps"
license: "PSF"
updated: "2026-10-01"
---

# dumps

Return the bytes object that would be written to a file by `dump(value, file)`.  The
value must be a supported type.  Raise a `ValueError` exception if value
has (or contains an object that has) an unsupported type.
`Code objects` are only supported if *allow_code* is true.

The *version* argument indicates the data format that `dumps` should use
(see below).

audit-event:: marshal.dumps value,version marshal.dump

> *Changed in 3.13*: Added the *allow_code* parameter.
