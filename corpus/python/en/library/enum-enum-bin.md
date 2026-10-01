---
id: "python-en-function-enum-bin"
language: "python"
lang: "en"
category: "function"
name: "bin"
signature: "bin(num, max_bits=None)"
directive: "function"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.bin"
license: "PSF"
updated: "2026-10-01"
---

# bin

Like built-in `bin`, except negative values are represented in
two's complement, and the leading bit always indicates sign
(`0` implies positive, `1` implies negative).

   >>> import enum
   >>> enum.bin(10)
   '0b0 1010'
   >>> enum.bin(~10)   # ~10 is -11
   '0b1 0101'

> *Added in 3.11*
