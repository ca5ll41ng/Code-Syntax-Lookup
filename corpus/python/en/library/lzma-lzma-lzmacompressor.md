---
id: "python-en-function-lzma-lzmacompressor"
language: "python"
lang: "en"
category: "function"
name: "LZMACompressor"
signature: "LZMACompressor(format=FORMAT_XZ, check=-1, preset=None, filters=None)"
directive: "class"
module: "lzma"
source_url: "https://docs.python.org/3/library/lzma.html#lzma.LZMACompressor"
license: "PSF"
updated: "2026-10-01"
---

# LZMACompressor

Create a compressor object, which can be used to compress data incrementally.

For a more convenient way of compressing a single chunk of data, see
`compress`.

The *format* argument specifies what container format should be used.
Possible values are `FORMAT_XZ` (the default),
`FORMAT_ALONE` and `FORMAT_RAW`.

The *check* argument specifies the type of integrity check to include in the
compressed data. This check is used when decompressing, to ensure that the
data has not been corrupted. Possible values are `CHECK_NONE`,
`CHECK_CRC32`, `CHECK_CRC64` (the default for
`FORMAT_XZ`) and `CHECK_SHA256`.

If the specified check is not supported, an `LZMAError` is raised.

The compression settings can be specified either as a preset compression
level (with the *preset* argument), or in detail as a custom filter chain
(with the *filters* argument).

The *preset* argument (if provided) should be an integer between `0` and
`9` (inclusive), optionally OR-ed with the constant
`PRESET_EXTREME`. If neither *preset* nor *filters* are given, the
default behavior is to use `PRESET_DEFAULT` (preset level `6`).
Higher presets produce smaller output, but make the compression process
slower.

> **Note**
>
> In addition to being more CPU-intensive, compression with higher presets
> also requires much more memory (and produces output that needs more memory
> to decompress). With preset `9` for example, the overhead for an
> `LZMACompressor` object can be as high as 800 MiB. For this reason,
> it is generally best to stick with the default preset.
>

The *filters* argument (if provided) should be a filter chain specifier.
See `filter-chain-specs` for details.

method:: compress(data)

method:: flush()
