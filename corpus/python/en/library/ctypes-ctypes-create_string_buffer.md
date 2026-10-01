---
id: "python-en-function-ctypes-create_string_buffer"
language: "python"
lang: "en"
category: "function"
name: "create_string_buffer"
signature: "create_string_buffer(init, size=None)"
directive: "function"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.create_string_buffer"
license: "PSF"
updated: "2026-10-01"
---

# create_string_buffer

This function creates a mutable character buffer. The returned object is a
ctypes array of `c_char`.

If *size* is given (and not `None`), it must be an `int`.
It specifies the size of the returned array.

If the *init* argument is given, it must be `bytes`. It is used
to initialize the array items. Bytes not initialized this way are
set to zero (NUL).

If *size* is not given (or if it is `None`), the buffer is made one element
larger than *init*, effectively adding a NUL terminator.

If both arguments are given, *size* must not be less than `len(init)`.

> **Warning**
>
> If *size* is equal to `len(init)`, a NUL terminator is
> not added. Do not treat such a buffer as a C string.
>

For example::

   >>> bytes(create_string_buffer(2))
   b'\x00\x00'
   >>> bytes(create_string_buffer(b'ab'))
   b'ab\x00'
   >>> bytes(create_string_buffer(b'ab', 2))
   b'ab'
   >>> bytes(create_string_buffer(b'ab', 4))
   b'ab\x00\x00'
   >>> bytes(create_string_buffer(b'abcdef', 2))
   Traceback (most recent call last):
      ...
   ValueError: byte string too long

audit-event:: ctypes.create_string_buffer init,size ctypes.create_string_buffer
