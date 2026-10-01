---
id: "python-en-function-binascii-crc32"
language: "python"
lang: "en"
category: "function"
name: "crc32"
signature: "crc32(data[, value])"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.crc32"
license: "PSF"
updated: "2026-10-01"
---

# crc32

Compute CRC-32, the unsigned 32-bit checksum of *data*, starting with an
initial CRC of *value*.  The default initial CRC is zero.  The algorithm
is consistent with the ZIP file checksum.  Since the algorithm is designed for
use as a checksum algorithm, it is not suitable for use as a general hash
algorithm.  Use as follows::

   print(binascii.crc32(b"hello world"))
   # Or, in two pieces:
   crc = binascii.crc32(b"hello")
   crc = binascii.crc32(b" world", crc)
   print('crc32 = {:#010x}'.format(crc))

> *Changed in 3.0*: The result is always unsigned.
