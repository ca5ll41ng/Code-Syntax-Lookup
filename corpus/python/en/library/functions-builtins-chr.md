---
id: "python-en-function-builtins-chr"
language: "python"
lang: "en"
category: "function"
name: "chr"
signature: "chr(codepoint, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#chr"
license: "PSF"
updated: "2026-10-01"
---

# chr

Return the string representing a character with the specified Unicode code point.
For example, `chr(97)` returns the string `'a'`, while
`chr(8364)` returns the string `'€'`. This is the inverse of `ord`.

The valid range for the argument is from 0 through 1,114,111 (0x10FFFF in
base 16).  `ValueError` will be raised if it is outside that range.
