---
id: "python-en-function-struct-unpack"
language: "python"
lang: "en"
category: "function"
name: "unpack"
signature: "unpack(format, buffer)"
directive: "function"
module: "struct"
source_url: "https://docs.python.org/3/library/struct.html#struct.unpack"
license: "PSF"
updated: "2026-10-01"
---

# unpack

Unpack from the buffer *buffer* (presumably packed by `pack(format, ...)`)
according to the format string *format*.  The result is a tuple even if it
contains exactly one item.  The buffer's size in bytes must match the
size required by the format, as reflected by `calcsize`.
