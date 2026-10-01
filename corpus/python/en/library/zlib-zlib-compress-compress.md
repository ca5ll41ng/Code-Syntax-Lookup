---
id: "python-en-function-zlib-compress-compress"
language: "python"
lang: "en"
category: "function"
name: "Compress.compress"
signature: "Compress.compress(data, /)"
directive: "method"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.Compress.compress"
license: "PSF"
updated: "2026-10-01"
---

# Compress.compress

Compress *data*, returning a bytes object containing compressed data for at least
part of the data in *data*.  This data should be concatenated to the output
produced by any preceding calls to the `compress` method.  Some input may
be kept in internal buffers for later processing.
