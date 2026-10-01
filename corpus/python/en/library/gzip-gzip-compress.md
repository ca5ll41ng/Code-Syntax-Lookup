---
id: "python-en-function-gzip-compress"
language: "python"
lang: "en"
category: "function"
name: "compress"
signature: "compress(data, compresslevel=6, *, mtime=0)"
directive: "function"
module: "gzip"
source_url: "https://docs.python.org/3/library/gzip.html#gzip.compress"
license: "PSF"
updated: "2026-10-01"
---

# compress

Compress the *data*, returning a `bytes` object containing
the compressed data.  *compresslevel* and *mtime* have the same meaning as in
the `GzipFile` constructor above,
but *mtime* defaults to 0 for reproducible output.

> *Added in 3.2*

> *Changed in 3.8*: Added the *mtime* parameter for reproducible output.

> *Changed in 3.11*: Speed is improved by compressing all data at once instead of in a streamed fashion. Calls with *mtime* set to ``0`` are delegated to :func:`zlib.compress` for better speed. In this situation the output may contain a gzip header "OS" byte value other than 255 "unknown" as supplied by the underlying zlib implementation.

> *Changed in 3.13*: The gzip header OS byte is guaranteed to be set to 255 when this function is used as was the case in 3.10 and earlier.

> *Changed in 3.14*: The *mtime* parameter now defaults to 0 for reproducible output. For the previous behaviour of using the current time, pass ``None`` to *mtime*.

> *Changed in 3.15*: The default compression level was reduced to 6 (down from 9). It is the default level used by most compression tools and a better tradeoff between speed and performance.
