---
id: "python-en-function-compression-zstd-zstddecompressor"
language: "python"
lang: "en"
category: "function"
name: "ZstdDecompressor"
signature: "ZstdDecompressor(zstd_dict=None, options=None)"
directive: "class"
module: "compression.zstd"
source_url: "https://docs.python.org/3/library/compression.zstd.html#compression.zstd.ZstdDecompressor"
license: "PSF"
updated: "2026-10-01"
---

# ZstdDecompressor

Create a decompressor object, which can be used to decompress data
incrementally.

For a more convenient way of decompressing an entire compressed stream at
once, see the module-level function `decompress`.

The *options* argument is a Python dictionary containing advanced
decompression parameters. The valid keys and values for compression
parameters are documented as part of the `DecompressionParameter`
documentation.

The *zstd_dict* argument is an instance of `ZstdDict`
containing trained data used during compression. This must be
the same Zstandard dictionary used during compression.

> **Note**
>
> This class does not transparently handle inputs containing multiple
> compressed frames, unlike the `decompress` function and
> `ZstdFile` class. To decompress a multi-frame input, you should
> use `decompress`, `ZstdFile` if working with a
> `file object`, or multiple `ZstdDecompressor` instances.
>

method:: decompress(data, max_length=-1)

attribute:: eof

attribute:: unused_data

attribute:: needs_input
