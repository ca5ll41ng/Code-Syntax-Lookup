---
id: "python-en-function-compression-zstd-compress"
language: "python"
lang: "en"
category: "function"
name: "compress"
signature: "compress(data, level=None, options=None, zstd_dict=None)"
directive: "function"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.compress"
license: "PSF"
updated: "2026-10-01"
---

# compress

Compress *data* (a `bytes-like object`), returning the compressed
data as a `bytes` object.

The *level* argument is an integer controlling the level of
compression. *level* is an alternative to setting
`CompressionParameter.compression_level` in *options*. Use
`~CompressionParameter.bounds` on
`~CompressionParameter.compression_level` to get the values that can
be passed for *level*. If advanced compression options are needed, the
*level* argument must be omitted and in the *options* dictionary the
`CompressionParameter.compression_level` parameter should be set.

The *options* argument is a Python dictionary containing advanced
compression parameters. The valid keys and values for compression parameters
are documented as part of the `CompressionParameter` documentation.

The *zstd_dict* argument is an instance of `ZstdDict`
containing trained data to improve compression efficiency. The
function `train_dict` can be used to generate a Zstandard dictionary.
