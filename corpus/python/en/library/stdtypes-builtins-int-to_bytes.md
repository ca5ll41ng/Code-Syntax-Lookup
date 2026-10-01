---
id: "python-en-function-builtins-int-to_bytes"
language: "python"
lang: "en"
category: "function"
name: "int.to_bytes"
signature: "int.to_bytes(length=1, byteorder='big', *, signed=False)"
directive: "method"
module: "builtins"
source_url: "https://docs.python.org/3/library/stdtypes.html#int.to_bytes"
license: "PSF"
updated: "2026-10-01"
---

# int.to_bytes

Return an array of bytes representing an integer.

    >>> (1024).to_bytes(2, byteorder='big')
    b'\x04\x00'
    >>> (1024).to_bytes(10, byteorder='big')
    b'\x00\x00\x00\x00\x00\x00\x00\x00\x04\x00'
    >>> (-1024).to_bytes(10, byteorder='big', signed=True)
    b'\xff\xff\xff\xff\xff\xff\xff\xff\xfc\x00'
    >>> x = 1000
    >>> x.to_bytes((x.bit_length() + 7) // 8, byteorder='little')
    b'\xe8\x03'

The integer is represented using *length* bytes, and defaults to 1.  An
`OverflowError` is raised if the integer is not representable with
the given number of bytes.

The *byteorder* argument determines the byte order used to represent the
integer, and defaults to `"big"`.  If *byteorder* is
`"big"`, the most significant byte is at the beginning of the byte
array.  If *byteorder* is `"little"`, the most significant byte is at
the end of the byte array.

The *signed* argument determines whether two's complement is used to
represent the integer.  If *signed* is `False` and a negative integer is
given, an `OverflowError` is raised. The default value for *signed*
is `False`.

The default values can be used to conveniently turn an integer into a
single byte object::

    >>> (65).to_bytes()
    b'A'

However, when using the default arguments, don't try
to convert a value greater than 255 or you'll get an `OverflowError`.

Equivalent to::

    def to_bytes(n, length=1, byteorder='big', signed=False):
        if byteorder == 'little':
            order = range(length)
        elif byteorder == 'big':
            order = reversed(range(length))
        else:
            raise ValueError("byteorder must be either 'little' or 'big'")

        return bytes((n >> i*8) & 0xff for i in order)

> *Added in 3.2*

> *Changed in 3.11*: Added default argument values for ``length`` and ``byteorder``.
