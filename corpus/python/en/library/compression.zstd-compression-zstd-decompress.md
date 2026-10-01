---
id: "python-en-function-compression-zstd-decompress"
language: "python"
lang: "en"
category: "function"
name: "decompress"
signature: "decompress(data, zstd_dict=None, options=None)"
directive: "function"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.decompress"
license: "PSF"
updated: "2026-10-01"
---

# decompress

Decompress *data* (a `bytes-like object`), returning the uncompressed
data as a `bytes` object.

The *options* argument is a Python dictionary containing advanced
decompression parameters. The valid keys and values for compression
parameters are documented as part of the `DecompressionParameter`
documentation.

The *zstd_dict* argument is an instance of `ZstdDict`
containing trained data used during compression. This must be
the same Zstandard dictionary used during compression.

If *data* is the concatenation of multiple distinct compressed frames,
decompress all of these frames, and return the concatenation of the results.
