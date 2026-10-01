---
id: "python-en-function-enum-enum"
language: "python"
lang: "en"
category: "function"
name: "enum"
title: "---------------"
directive: "module"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#module-enum"
license: "PSF"
updated: "2026-10-01"
---

# ---------------

**Notes**

`IntEnum`, `StrEnum`, and `IntFlag`

   These three enum types are designed to be drop-in replacements for existing
   integer- and string-based values; as such, they have extra limitations:

   - `__str__` uses the value and not the name of the enum member

   - `__format__`, because it uses `__str__`, will also use the value of
     the enum member instead of its name

   If you do not need/want those limitations, you can either create your own
   base class by mixing in the `int` or `str` type yourself::

       >>> from enum import Enum
       >>> class MyIntEnum(int, Enum):
       ...     pass

   or you can reassign the appropriate `str`, etc., in your enum::

       >>> from enum import Enum, IntEnum
       >>> class MyIntEnum(IntEnum):
       ...     __str__ = Enum.__str__
