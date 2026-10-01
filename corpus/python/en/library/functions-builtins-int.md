---
id: "python-en-function-builtins-int"
language: "python"
lang: "en"
category: "function"
name: "int"
signature: "int(number=0, /)"
directive: "class"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#int"
license: "PSF"
updated: "2026-10-01"
---

# int

Return an integer object constructed from a number or a string, or return
`0` if no arguments are given.

Examples:

```python

>>> int(123.45)
123
>>> int('123')
123
>>> int('   -12_345\n')
-12345
>>> int('FACE', 16)
64206
>>> int('0xface', 0)
64206
>>> int('01110011', base=2)
115
```

If the argument defines `~object.__int__`,
`int(x)` returns `x.__int__()`.  If the argument defines
`~object.__index__`, it returns `x.__index__()`.
For floating-point numbers, this truncates towards zero.

If the argument is not a number or if *base* is given, then it must be a string,
`bytes`, or `bytearray` instance representing an integer
in radix *base*.  Optionally, the string can be preceded by `+` or `-`
(with no space in between), have leading zeros, be surrounded by whitespace,
and have single underscores interspersed between digits.

A base-n integer string contains digits, each representing a value from 0 to
n-1. The values 0--9 can be represented by any Unicode decimal digit. The
values 10--35 can be represented by `a` to `z` (or `A` to `Z`). The
default *base* is 10. The allowed bases are 0 and 2--36. Base-2, -8, and -16
strings can be optionally prefixed with `0b`/`0B`, `0o`/`0O`, or
`0x`/`0X`, as with integer literals in code.  For base 0, the string is
interpreted in a similar way to an `integer literal in code`,
in that the actual base is 2, 8, 10, or 16 as determined by the prefix. Base
0 also disallows leading zeros: `int('010', 0)` is not legal, while
`int('010')` and `int('010', 8)` are.

The integer type is described in `typesnumeric`.

> *Changed in 3.4*: If *base* is not an instance of :class:`int` and the *base* object has a :meth:`base.__index__ <object.__index__>` method, that method is called to obtain an integer for the base.  Previous versions used :meth:`base.__int__ <object.__int__>` instead of :meth:`base.__index__ <object.__index__>`.

> *Changed in 3.6*: Grouping digits with underscores as in code literals is allowed.

> *Changed in 3.7*: The first parameter is now positional-only.

> *Changed in 3.8*: Falls back to :meth:`~object.__index__` if :meth:`~object.__int__` is not defined.

> *Changed in 3.11*: :class:`int` string inputs and string representations can be limited to help avoid denial of service attacks. A :exc:`ValueError` is raised when the limit is exceeded while converting a string to an :class:`int` or when converting an :class:`int` into a string would exceed the limit. See the :ref:`integer string conversion length limitation <int_max_str_digits>` documentation.

> *Changed in 3.14*: :func:`int` no longer delegates to the :meth:`~object.__trunc__` method.
