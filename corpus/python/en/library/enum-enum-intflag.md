---
id: "python-en-function-enum-intflag"
language: "python"
lang: "en"
category: "function"
name: "IntFlag"
directive: "class"
module: "enum"
source_url: "https://docs.python.org/3/library/enum.html#enum.IntFlag"
license: "PSF"
updated: "2026-10-01"
---

# IntFlag

`IntFlag` is the same as `Flag`, but its members are also integers and can be
used anywhere that an integer can be used.

   >>> from enum import IntFlag, auto
   >>> class Color(IntFlag):
   ...     RED = auto()
   ...     GREEN = auto()
   ...     BLUE = auto()
   ...
   >>> Color.RED & 2
   <Color: 0>
   >>> Color.RED  2
   <Color.REDGREEN: 3>

If any integer operation is performed with an *IntFlag* member, the result is
not an *IntFlag*::

     >>> Color.RED + 2
     3

If a `Flag` operation is performed with an *IntFlag* member and:

* the result is a valid *IntFlag*: an *IntFlag* is returned
* the result is not a valid *IntFlag*: the result depends on the `FlagBoundary` setting

The `repr` of unnamed zero-valued flags has changed.  It is now::

   >>> Color(0)
   <Color: 0>

> **Note**
>
> Using `auto` with `IntFlag` results in integers that are powers
> of two, starting with `1`.
>

> *Changed in 3.11*: :meth:`~object.__str__` is now :meth:`!int.__str__` to better support the *replacement of existing constants* use-case.  :meth:`~object.__format__` was already :meth:`!int.__format__` for that same reason.  Inversion of an :class:`!IntFlag` now returns a positive value that is the union of all flags not in the given flag, rather than a negative value. This matches the existing :class:`Flag` behavior.
