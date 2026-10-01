---
id: "python-en-function-bz2-bz2decompressor"
language: "python"
lang: "en"
category: "function"
name: "BZ2Decompressor"
signature: "BZ2Decompressor()"
directive: "class"
module: "bz2"
source_url: "https://docs.python.org/3/library/bz2.html#bz2.BZ2Decompressor"
license: "PSF"
updated: "2026-10-01"
---

# BZ2Decompressor

Create a new decompressor object. This object may be used to decompress data
incrementally. For one-shot compression, use the `decompress` function
instead.

> **Note**
>
> This class does not transparently handle inputs containing multiple
> compressed streams, unlike `decompress` and `BZ2File`. If
> you need to decompress a multi-stream input with `BZ2Decompressor`,
> you must use a new decompressor for each stream.
>

method:: decompress(data, max_length=-1)

attribute:: eof

attribute:: unused_data

attribute:: needs_input
