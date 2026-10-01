---
id: "python-en-function-enum-strenum"
language: "python"
lang: "en"
category: "function"
name: "StrEnum"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.StrEnum"
license: "PSF"
updated: "2026-10-01"
---

# StrEnum

*StrEnum* is the same as `Enum`, but its members are also strings and
can be used in most of the same places that a string can be used. The result
of any string operation performed on or with a *StrEnum* member is not part
of the enumeration.

>>> from enum import StrEnum, auto
>>> class Color(StrEnum):
...     RED = 'r'
...     GREEN = 'g'
...     BLUE = 'b'
...     UNKNOWN = auto()
...
>>> Color.RED
<Color.RED: 'r'>
>>> Color.UNKNOWN
<Color.UNKNOWN: 'unknown'>
>>> str(Color.UNKNOWN)
'unknown'

> **Note**
>
> There are places in the stdlib that check for an exact `str`
> instead of a `str` subclass (i.e. `type(unknown) == str`
> instead of `isinstance(unknown, str)`), and in those locations you
> will need to use `str(MyStrEnum.MY_MEMBER)`.
>

> **Note**
>
> Using `auto` with `StrEnum` results in the lower-cased member
> name as the value.
>

> **Note**
>
> `~object.__str__` is `str.__str__` to better support the
> *replacement of existing constants* use-case.  `~object.__format__` is likewise
> `str.__format__` for that same reason.
>

> *Added in 3.11*
