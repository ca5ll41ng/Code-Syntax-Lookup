---
id: "python-en-function-builtins-bytearray-rpartition"
language: "python"
lang: "en"
category: "function"
name: "bytearray.rpartition"
signature: "bytearray.rpartition(sep, /)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#bytearray.rpartition"
license: "PSF"
updated: "2026-10-01"
---

# bytearray.rpartition

Split the sequence at the last occurrence of *sep*, and return a 3-tuple
containing the part before the separator, the separator itself or its
bytearray copy, and the part after the separator.
If the separator is not found, return a 3-tuple
containing two empty bytes or bytearray objects, followed by a copy of the
original sequence.

The separator to search for may be any `bytes-like object`.
