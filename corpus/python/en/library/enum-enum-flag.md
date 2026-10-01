---
id: "python-en-function-enum-flag"
language: "python"
lang: "en"
category: "function"
name: "Flag"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.Flag"
license: "PSF"
updated: "2026-10-01"
---

# Flag

`Flag` is the same as `Enum`, but its members support the bitwise
operators `&` (*AND*), `|` (*OR*), `^` (*XOR*), and `~` (*INVERT*);
the results of those operations are (aliases of) members of the enumeration.

method:: __contains__(self, value)

method:: __iter__(self)

method:: __len__(self)

method:: __bool__(self)

method:: __or__(self, other)

method:: __and__(self, other)

method:: __xor__(self, other)

method:: __invert__(self)

method:: _numeric_repr_

> **Note**
>
> Using `auto` with `Flag` results in integers that are powers
> of two, starting with `1`.
>

> *Changed in 3.11 The *repr()* of zero-valued flags has changed.  It*: is now:     >>> Color(0) # doctest: +SKIP    <Color: 0>
