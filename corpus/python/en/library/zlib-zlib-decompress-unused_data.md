---
id: "python-en-function-zlib-decompress-unused_data"
language: "python"
lang: "en"
category: "function"
name: "Decompress.unused_data"
directive: "attribute"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.Decompress.unused_data"
license: "PSF"
updated: "2026-10-01"
---

# Decompress.unused_data

A bytes object which contains any bytes past the end of the compressed data. That is,
this remains `b""` until the last byte that contains compression data is
available.  If the whole bytestring turned out to contain compressed data, this is
`b""`, an empty bytes object.
