---
id: "python-en-function-lzma-format_raw"
language: "python"
lang: "en"
category: "function"
name: "FORMAT_RAW"
directive: "data"
module: "lzma"
source_url: "https://docs.python.org/3/library/lzma.html#lzma.FORMAT_RAW"
license: "PSF"
updated: "2026-10-01"
---

# FORMAT_RAW

A raw data stream, not using any container format.  This format specifier
does not support integrity checks, and requires that you always specify a
custom filter chain (for both compression and decompression).  Additionally,
data compressed in this manner cannot be decompressed using
`FORMAT_AUTO`.
