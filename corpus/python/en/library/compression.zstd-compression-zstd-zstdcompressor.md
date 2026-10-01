---
id: "python-en-function-compression-zstd-zstdcompressor"
language: "python"
lang: "en"
category: "function"
name: "ZstdCompressor"
signature: "ZstdCompressor(level=None, options=None, zstd_dict=None)"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.ZstdCompressor"
license: "PSF"
updated: "2026-10-01"
---

# ZstdCompressor

Create a compressor object, which can be used to compress data
incrementally.

For a more convenient way of compressing a single chunk of data, see the
module-level function `compress`.

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

The *zstd_dict* argument is an optional instance of `ZstdDict`
containing trained data to improve compression efficiency. The
function `train_dict` can be used to generate a Zstandard dictionary.

method:: compress(data, mode=ZstdCompressor.CONTINUE)

method:: flush(mode=ZstdCompressor.FLUSH_FRAME)

method:: set_pledged_input_size(size)

attribute:: CONTINUE

attribute:: FLUSH_BLOCK

attribute:: FLUSH_FRAME

attribute:: last_mode
