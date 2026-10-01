---
id: "python-en-function-ctypes-cfield"
language: "python"
lang: "en"
category: "function"
name: "CField"
signature: "CField(*args, **kw)"
directive: "class"
module: "ctypes"
source_url: "https://docs.python.org/3/library/ctypes.html#ctypes.CField"
license: "PSF"
updated: "2026-10-01"
---

# CField

Descriptor for fields of a `Structure` and `Union`.
For example::

   >>> class Color(Structure):
   ...     _fields_ = (
   ...         ('red', c_uint8),
   ...         ('green', c_uint8),
   ...         ('blue', c_uint8),
   ...         ('intense', c_bool, 1),
   ...         ('blinking', c_bool, 1),
   ...    )
   ...
   >>> Color.red
   <ctypes.CField 'red' type=c_ubyte, ofs=0, size=1>
   >>> Color.green.type
   <class 'ctypes.c_ubyte'>
   >>> Color.blue.byte_offset
   2
   >>> Color.intense
   <ctypes.CField 'intense' type=c_bool, ofs=3, bit_size=1, bit_offset=0>
   >>> Color.blinking.bit_offset
   1

All attributes are read-only.

`CField` objects are created via `~Structure._fields_`;
do not instantiate the class directly.

> *Added in 3.14*: Previously, descriptors only had ``offset`` and ``size`` attributes and a readable string representation; the :class:`!CField` class was not available directly.

attribute:: name

attribute:: type

attribute:: offset

attribute:: byte_size

attribute:: size

attribute:: is_bitfield

attribute:: bit_offset

attribute:: is_anonymous
