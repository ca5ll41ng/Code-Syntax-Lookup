---
id: "python-en-function-zlib-crc32"
language: "python"
lang: "en"
category: "function"
name: "crc32"
signature: "crc32(data, value=0, /)"
directive: "function"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.crc32"
license: "PSF"
updated: "2026-10-01"
---

# crc32

Computes a CRC (Cyclic Redundancy Check) checksum of *data*. The
result is an unsigned 32-bit integer. If *value* is present, it is used
as the starting value of the checksum; otherwise, a default value of 0
is used.  Passing in *value* allows computing a running checksum over the
concatenation of several inputs.  The algorithm is not cryptographically
strong, and should not be used for authentication or digital signatures.  Since
the algorithm is designed for use as a checksum algorithm, it is not suitable
for use as a general hash algorithm.

> *Changed in 3.0*: The result is always unsigned.
