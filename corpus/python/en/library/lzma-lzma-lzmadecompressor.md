---
id: "python-en-function-lzma-lzmadecompressor"
language: "python"
lang: "en"
category: "function"
name: "LZMADecompressor"
signature: "LZMADecompressor(format=FORMAT_AUTO, memlimit=None, filters=None)"
directive: "class"
module: "lzma"
source_url: "https://docs.python.org/3/library/lzma.html#lzma.LZMADecompressor"
license: "PSF"
updated: "2026-10-01"
---

# LZMADecompressor

Create a decompressor object, which can be used to decompress data
incrementally.

For a more convenient way of decompressing an entire compressed stream at
once, see `decompress`.

The *format* argument specifies the container format that should be used. The
default is `FORMAT_AUTO`, which can decompress both `.xz` and
`.lzma` files. Other possible values are `FORMAT_XZ`,
`FORMAT_ALONE`, and `FORMAT_RAW`.

The *memlimit* argument specifies a limit (in bytes) on the amount of memory
that the decompressor can use. When this argument is used, decompression will
fail with an `LZMAError` if it is not possible to decompress the input
within the given memory limit.

The *filters* argument specifies the filter chain that was used to create
the stream being decompressed. This argument is required if *format* is
`FORMAT_RAW`, but should not be used for other formats.
See `filter-chain-specs` for more information about filter chains.

> **Note**
>
> This class does not transparently handle inputs containing multiple
> compressed streams, unlike `decompress` and `LZMAFile`. To
> decompress a multi-stream input with `LZMADecompressor`, you must
> create a new decompressor for each stream.
>

method:: decompress(data, max_length=-1)

attribute:: check

attribute:: eof

attribute:: unused_data

attribute:: needs_input
