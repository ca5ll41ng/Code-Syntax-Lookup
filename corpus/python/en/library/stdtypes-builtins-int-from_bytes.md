---
id: "python-en-function-builtins-int-from_bytes"
language: "python"
lang: "en"
category: "function"
name: "int.from_bytes"
signature: "int.from_bytes(bytes, byteorder='big', *, signed=False)"
directive: "classmethod"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#int.from_bytes"
license: "PSF"
updated: "2026-10-01"
---

# int.from_bytes

Return the integer represented by the given array of bytes.

    >>> int.from_bytes(b'\x00\x10', byteorder='big')
    16
    >>> int.from_bytes(b'\x00\x10', byteorder='little')
    4096
    >>> int.from_bytes(b'\xfc\x00', byteorder='big', signed=True)
    -1024
    >>> int.from_bytes(b'\xfc\x00', byteorder='big', signed=False)
    64512
    >>> int.from_bytes([255, 0, 0], byteorder='big')
    16711680

The argument *bytes* must either be a `bytes-like object` or an
iterable producing bytes.

The *byteorder* argument determines the byte order used to represent the
integer, and defaults to `"big"`.  If *byteorder* is
`"big"`, the most significant byte is at the beginning of the byte
array.  If *byteorder* is `"little"`, the most significant byte is at
the end of the byte array.  To request the native byte order of the host
system, use `sys.byteorder` as the byte order value.

The *signed* argument indicates whether two's complement is used to
represent the integer.

Equivalent to::

    def from_bytes(bytes, byteorder='big', signed=False):
        if byteorder == 'little':
            little_ordered = list(bytes)
        elif byteorder == 'big':
            little_ordered = list(reversed(bytes))
        else:
            raise ValueError("byteorder must be either 'little' or 'big'")

        n = sum(b << i*8 for i, b in enumerate(little_ordered))
        if signed and little_ordered and (little_ordered[-1] & 0x80):
            n -= 1 << 8*len(little_ordered)

        return n

> *Added in 3.2*

> *Changed in 3.11*: Added default argument value for ``byteorder``.
