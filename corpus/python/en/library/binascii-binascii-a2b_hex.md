---
id: "python-en-function-binascii-a2b_hex"
language: "python"
lang: "en"
category: "function"
name: "a2b_hex"
signature: "a2b_hex(hexstr, *, ignorechars=b'')"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.a2b_hex"
license: "PSF"
updated: "2026-10-01"
---

# a2b_hex

Return the binary data represented by the hexadecimal string *hexstr*.  This
function is the inverse of `b2a_hex`. *hexstr* must contain an even number
of hexadecimal digits (which can be upper or lower case), otherwise an
`Error` exception is raised.

*ignorechars* should be a `bytes-like object` containing characters
to ignore from the input.

Similar functionality (but more liberal towards whitespace) is also accessible
using the `bytes.fromhex` class method.

> *Changed in 3.15*: Added the *ignorechars* parameter.
