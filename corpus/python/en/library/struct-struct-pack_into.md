---
id: "python-en-function-struct-pack_into"
language: "python"
lang: "en"
category: "function"
name: "pack_into"
signature: "pack_into(format, buffer, offset, v1, v2, ...)"
directive: "function"
module: "struct"
source_url: "https://docs.python.org/3/library/struct.html#struct.pack_into"
license: "PSF"
updated: "2026-10-01"
---

# pack_into

Pack the values *v1*, *v2*, ... according to the format string *format* and
write the packed bytes into the writable buffer *buffer* starting at
position *offset*.  Note that *offset* is a required argument.
A negative *offset* counts from the end of *buffer*.
