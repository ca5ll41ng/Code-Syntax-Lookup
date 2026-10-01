---
id: "python-en-function-binascii-b2a_hex"
language: "python"
lang: "en"
category: "function"
name: "b2a_hex"
signature: "b2a_hex(data[, sep[, bytes_per_sep=1]])"
directive: "function"
module: "binascii"
source_url: "https://docs.python.org/3/library/binascii.html#binascii.b2a_hex"
license: "PSF"
updated: "2026-10-01"
---

# b2a_hex

Return the hexadecimal representation of the binary *data*.  Every byte of
*data* is converted into the corresponding 2-digit hex representation.  The
returned bytes object is therefore twice as long as the length of *data*.

Similar functionality (but returning a text string) is also conveniently
accessible using the `bytes.hex` method.

If *sep* is specified, it must be a single character str or bytes object.
It will be inserted in the output after every *bytes_per_sep* input bytes.
Separator placement is counted from the right end of the output by default,
if you wish to count from the left, supply a negative *bytes_per_sep* value.

   >>> import binascii
   >>> binascii.b2a_hex(b'\xb9\x01\xef')
   b'b901ef'
   >>> binascii.hexlify(b'\xb9\x01\xef', '-')
   b'b9-01-ef'
   >>> binascii.b2a_hex(b'\xb9\x01\xef', b'_', 2)
   b'b9_01ef'
   >>> binascii.b2a_hex(b'\xb9\x01\xef', b' ', -2)
   b'b901 ef'

> *Changed in 3.8*: The *sep* and *bytes_per_sep* parameters were added.
