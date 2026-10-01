---
id: "python-en-function-zlib-crc32_combine"
language: "python"
lang: "en"
category: "function"
name: "crc32_combine"
signature: "crc32_combine(crc1, crc2, len2, /)"
directive: "function"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.crc32_combine"
license: "PSF"
updated: "2026-10-01"
---

# crc32_combine

Combine two CRC-32 checksums into one.

Given the CRC-32 checksum *crc1* of a sequence `A` and the
CRC-32 checksum *crc2* of a sequence `B` of length *len2*,
return the CRC-32 checksum of `A` and `B` concatenated.

This function is typically useful to combine CRC-32 checksums
that were concurrently computed. To compute checksums sequentially, use
`crc32` with the running checksum as the `value` argument.

> *Added in 3.15*
