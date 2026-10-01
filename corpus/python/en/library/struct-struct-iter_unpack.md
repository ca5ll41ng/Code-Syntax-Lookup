---
id: "python-en-function-struct-iter_unpack"
language: "python"
lang: "en"
category: "function"
name: "iter_unpack"
signature: "iter_unpack(format, buffer)"
directive: "function"
module: "struct"
source_url: "https://docs.python.org/3/library/struct.html#struct.iter_unpack"
license: "PSF"
updated: "2026-10-01"
---

# iter_unpack

Iteratively unpack from the buffer *buffer* according to the format
string *format*.  This function returns an iterator which will read
equally sized chunks from the buffer until all its contents have been
consumed.  The buffer's size in bytes must be a multiple of the size
required by the format, as reflected by `calcsize`.

Each iteration yields a tuple as specified by the format string.

> *Added in 3.4*
