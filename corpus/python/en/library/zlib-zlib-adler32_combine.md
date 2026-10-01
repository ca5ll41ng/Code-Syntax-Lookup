---
id: "python-en-function-zlib-adler32_combine"
language: "python"
lang: "en"
category: "function"
name: "adler32_combine"
signature: "adler32_combine(adler1, adler2, len2, /)"
directive: "function"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.adler32_combine"
license: "PSF"
updated: "2026-10-01"
---

# adler32_combine

Combine two Adler-32 checksums into one.

Given the Adler-32 checksum *adler1* of a sequence `A` and the
Adler-32 checksum *adler2* of a sequence `B` of length *len2*,
return the Adler-32 checksum of `A` and `B` concatenated.

This function is typically useful to combine Adler-32 checksums
that were concurrently computed. To compute checksums sequentially, use
`adler32` with the running checksum as the `value` argument.

> *Added in 3.15*
