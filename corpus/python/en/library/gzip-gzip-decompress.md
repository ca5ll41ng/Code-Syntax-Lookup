---
id: "python-en-function-gzip-decompress"
language: "python"
lang: "en"
category: "function"
name: "decompress"
signature: "decompress(data)"
directive: "function"
module: "gzip"
source_url: "https://docs.python.org/3/library/gzip.html#gzip.decompress"
license: "PSF"
updated: "2026-10-01"
---

# decompress

Decompress the *data*, returning a `bytes` object containing the
uncompressed data. This function is capable of decompressing multi-member
gzip data (multiple gzip blocks concatenated together). When the data is
certain to contain only one member the `zlib.decompress` function with
*wbits* set to 31 is faster.

> *Added in 3.2*

> *Changed in 3.11*: Speed is improved by decompressing members at once in memory instead of in a streamed fashion.
