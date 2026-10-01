---
id: "python-en-function-builtins-hex"
language: "python"
lang: "en"
category: "function"
name: "hex"
signature: "hex(integer, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#hex"
license: "PSF"
updated: "2026-10-01"
---

# hex

Convert an integer number to a lowercase hexadecimal string prefixed with
"0x". If *integer* is not a Python `int` object, it has to define an
`~object.__index__` method that returns an integer. Some examples:

   >>> hex(255)
   '0xff'
   >>> hex(-42)
   '-0x2a'

If you want to convert an integer number to an uppercase or lower hexadecimal
string with prefix or not, you can use either of the following ways:

  >>> '%#x' % 255, '%x' % 255, '%X' % 255
  ('0xff', 'ff', 'FF')
  >>> format(255, '#x'), format(255, 'x'), format(255, 'X')
  ('0xff', 'ff', 'FF')
  >>> f'{255:#x}', f'{255:x}', f'{255:X}'
  ('0xff', 'ff', 'FF')

See also `format` for more information.

See also `int` for converting a hexadecimal string to an
integer using a base of 16.

> **Note**
>
> To obtain a hexadecimal string representation for a float, use the
> `float.hex` method.
>
