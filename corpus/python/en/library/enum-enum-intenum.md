---
id: "python-en-function-enum-intenum"
language: "python"
lang: "en"
category: "function"
name: "IntEnum"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.IntEnum"
license: "PSF"
updated: "2026-10-01"
---

# IntEnum

*IntEnum* is the same as `Enum`, but its members are also integers and can be
used anywhere that an integer can be used.  If any integer operation is performed
with an *IntEnum* member, the resulting value loses its enumeration status.

   >>> from enum import IntEnum
   >>> class Number(IntEnum):
   ...     ONE = 1
   ...     TWO = 2
   ...     THREE = 3
   ...
   >>> Number.THREE
   <Number.THREE: 3>
   >>> Number.ONE + Number.TWO
   3
   >>> Number.THREE + 5
   8
   >>> Number.THREE == 3
   True

> **Note**
>
> Using `auto` with `IntEnum` results in integers of increasing
> value, starting with `1`.
>

> *Changed in 3.11 :meth:`~object.__str__` is now :meth:`!int.__str__` to*: better support the *replacement of existing constants* use-case. :meth:`~object.__format__` was already :meth:`!int.__format__` for that same reason.
