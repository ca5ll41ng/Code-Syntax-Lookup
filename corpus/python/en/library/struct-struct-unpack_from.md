---
id: "python-en-function-struct-unpack_from"
language: "python"
lang: "en"
category: "function"
name: "unpack_from"
signature: "unpack_from(format, /, buffer, offset=0)"
directive: "function"
module: "struct"
source_url: "https://docs.python.org/3/library/struct.html#struct.unpack_from"
license: "PSF"
updated: "2026-10-01"
---

# unpack_from

Unpack from *buffer* starting at position *offset*, according to the format
string *format*.  The result is a tuple even if it contains exactly one
item.  The buffer's size in bytes, starting at position *offset*, must be at
least the size required by the format, as reflected by `calcsize`.
A negative *offset* counts from the end of *buffer*.
