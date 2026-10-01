---
id: "python-en-function-sys-float_info"
language: "python"
lang: "en"
category: "function"
name: "float_info"
directive: "data"
module: "sys"
source_url: "https://docs.python.org/3/library/sys.html#sys.float_info"
license: "PSF"
updated: "2026-10-01"
---

# float_info

A `named tuple` holding information about the float type. It
contains low level information about the precision and internal
representation.  The values correspond to the various floating-point
constants defined in the standard header file `float.h` for the 'C'
programming language; see section 5.2.4.2.2 of the 1999 ISO/IEC C standard
[C99]_, 'Characteristics of floating types', for details.

list-table:: Attributes of the `float_info` `named tuple`

The attribute `sys.float_info.dig` needs further explanation.  If
`s` is any string representing a decimal number with at most
`sys.float_info.dig` significant digits, then converting `s` to a
float and back again will recover a string representing the same decimal
value::

   >>> import sys
   >>> sys.float_info.dig
   15
   >>> s = '3.14159265358979'    # decimal string with 15 significant digits
   >>> format(float(s), '.15g')  # convert to float and back -> same value
   '3.14159265358979'

But for strings with more than `sys.float_info.dig` significant digits,
this isn't always true::

   >>> s = '9876543211234567'    # 16 significant digits is too many!
   >>> format(float(s), '.16g')  # conversion changes value
   '9876543211234568'
