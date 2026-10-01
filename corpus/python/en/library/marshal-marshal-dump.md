---
id: "python-en-function-marshal-dump"
language: "python"
lang: "en"
category: "function"
name: "dump"
signature: "dump(value, file, version=version, /, *, allow_code=True)"
directive: "function"
module: "marshal"
source_url: "https://docs.python.org/3/library/marshal.html#marshal.dump"
license: "PSF"
updated: "2026-10-01"
---

# dump

Write the value on the open file.  The value must be a supported type.  The
file must be a writeable `binary file`.

If the value has (or contains an object that has) an unsupported type, a
`ValueError` exception is raised --- but garbage data will also be written
to the file.  The object will not be properly read back by `load`.
`Code objects` are only supported if *allow_code* is true.

The *version* argument indicates the data format that `dump` should use
(see below).

audit-event:: marshal.dumps value,version marshal.dump

> *Changed in 3.13*: Added the *allow_code* parameter.
