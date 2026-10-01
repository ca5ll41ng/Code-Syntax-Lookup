---
id: "python-en-function-lzma-decompress"
language: "python"
lang: "en"
category: "function"
name: "decompress"
signature: "decompress(data, format=FORMAT_AUTO, memlimit=None, filters=None)"
directive: "function"
module: "lzma"
source_url: "https://docs.python.org/3/library/lzma.html#lzma.decompress"
license: "PSF"
updated: "2026-10-01"
---

# decompress

Decompress *data* (a `bytes` object), returning the uncompressed data
as a `bytes` object.

If *data* is the concatenation of multiple distinct compressed streams,
decompress all of these streams, and return the concatenation of the results.

See `LZMADecompressor` above for a description of the *format*,
*memlimit* and *filters* arguments.
