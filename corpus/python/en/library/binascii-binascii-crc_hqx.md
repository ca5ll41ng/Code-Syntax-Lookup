---
id: "python-en-function-binascii-crc_hqx"
language: "python"
lang: "en"
category: "function"
name: "crc_hqx"
signature: "crc_hqx(data, value)"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.crc_hqx"
license: "PSF"
updated: "2026-10-01"
---

# crc_hqx

Compute a 16-bit CRC value of *data*, starting with *value* as the
initial CRC, and return the result.  This uses the CRC-CCITT polynomial
*x*`16` + *x*`12` + *x*`5` + 1, often represented as
0x1021.  This CRC is used in the binhex4 format.
