---
id: "python-en-function-builtins-ord"
language: "python"
lang: "en"
category: "function"
name: "ord"
signature: "ord(character, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#ord"
license: "PSF"
updated: "2026-10-01"
---

# ord

Return the ordinal value of a character.

If the argument is a one-character string, return the Unicode code point
of that character.  For example,
`ord('a')` returns the integer `97` and `ord('€')` (Euro sign)
returns `8364`.  This is the inverse of `chr`.

If the argument is a `bytes` or `bytearray` object of
length 1, return its single byte value.
For example, `ord(b'a')` returns the integer `97`.
