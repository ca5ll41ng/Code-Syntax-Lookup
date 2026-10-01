---
id: "python-en-function-enum-reprenum"
language: "python"
lang: "en"
category: "function"
name: "ReprEnum"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.ReprEnum"
license: "PSF"
updated: "2026-10-01"
---

# ReprEnum

`ReprEnum` uses the `repr()` of `Enum`,
but the `str()` of the mixed-in data type:

* `int.__str__` for `IntEnum` and `IntFlag`
* `str.__str__` for `StrEnum`

Inherit from `ReprEnum` to keep the `str()` / `format`
of the mixed-in data type instead of using the
`Enum`-default `str()`.

> *Added in 3.11*
