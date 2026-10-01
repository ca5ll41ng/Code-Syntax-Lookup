---
id: "python-en-function-builtins-bin"
language: "python"
lang: "en"
category: "function"
name: "bin"
signature: "bin(integer, /)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#bin"
license: "PSF"
updated: "2026-10-01"
---

# bin

Convert an integer number to a binary string prefixed with "0b". The result
is a valid Python expression. If *integer* is not a Python `int` object, it
has to define an `~object.__index__` method that returns an integer. Some
examples:

   >>> bin(3)
   '0b11'
   >>> bin(-10)
   '-0b1010'

If the prefix "0b" is desired or not, you can use either of the following ways.

   >>> format(14, '#b'), format(14, 'b')
   ('0b1110', '1110')
   >>> f'{14:#b}', f'{14:b}'
   ('0b1110', '1110')

See also `enum.bin` to represent negative values as twos-complement.

See also `format` for more information.
