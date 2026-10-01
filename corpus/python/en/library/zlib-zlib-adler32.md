---
id: "python-en-function-zlib-adler32"
language: "python"
lang: "en"
category: "function"
name: "adler32"
signature: "adler32(data, value=1, /)"
directive: "function"
module: "zlib"
source_url: "https://docs.python.org/3/library/zlib.html#zlib.adler32"
license: "PSF"
updated: "2026-10-01"
---

# adler32

Computes an Adler-32 checksum of *data*.  (An Adler-32 checksum is almost as
reliable as a CRC32 but can be computed much more quickly.)  The result
is an unsigned 32-bit integer.  If *value* is present, it is used as
the starting value of the checksum; otherwise, a default value of 1
is used.  Passing in *value* allows computing a running checksum over the
concatenation of several inputs.  The algorithm is not cryptographically
strong, and should not be used for authentication or digital signatures.  Since
the algorithm is designed for use as a checksum algorithm, it is not suitable
for use as a general hash algorithm.

> *Changed in 3.0*: The result is always unsigned.
