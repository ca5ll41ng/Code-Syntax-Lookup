---
id: "python-en-function-bz2-decompress"
language: "python"
lang: "en"
category: "function"
name: "decompress"
signature: "decompress(data)"
directive: "function"
module: "bz2"
source_url: "https://docs.python.org/3/library/bz2.html#bz2.decompress"
license: "PSF"
updated: "2026-10-01"
---

# decompress

Decompress *data*, a `bytes-like object`.

If *data* is the concatenation of multiple compressed streams, decompress
all of the streams.

For incremental decompression, use a `BZ2Decompressor` instead.

> *Changed in 3.3*: Support for multi-stream inputs was added.
