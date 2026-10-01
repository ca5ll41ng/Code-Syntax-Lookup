---
id: "python-en-function-enum-auto"
language: "python"
lang: "en"
category: "function"
name: "auto"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.auto"
license: "PSF"
updated: "2026-10-01"
---

# auto

*auto* can be used in place of a value.  If used, the *Enum* machinery will
call an `Enum`'s `~Enum._generate_next_value_` to get an appropriate value.
For `Enum` and `IntEnum` that appropriate value will be the highest value seen
plus one; for `Flag` and `IntFlag` it will be the first power-of-two greater
than the highest value seen; for `StrEnum` it will be the lower-cased version of
the member's name.  Care must be taken if mixing *auto()* with manually
specified values.

*auto* instances are only resolved when at the top level of an assignment, either by
itself or as part of a tuple:

* `FIRST = auto()` will work (auto() is replaced with `1`);
* `SECOND = auto(), -2` will work (auto is replaced with `2`, so `2, -2` is
  used to create the `SECOND` enum member;
* `THIRD = [auto(), -3]` will *not* work (`[<auto instance>, -3]` is used to
  create the `THIRD` enum member)

> *Changed in 3.11.1*: In prior versions, ``auto()`` had to be the only thing on the assignment line to work properly.

`_generate_next_value_` can be overridden to customize the values used by
*auto*.

> **Note**
>
> the highest member value incremented by 1, and will fail if any
> member is an incompatible type.
>
