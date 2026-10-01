---
id: "python-en-function-fractions-fraction"
language: "python"
lang: "en"
category: "function"
name: "Fraction"
signature: "Fraction(numerator=0, denominator=1)"
directive: "class"
module: "fractions"
source_url: "https://docs.python.org/3/library/fractions.html#fractions.Fraction"
license: "PSF"
updated: "2026-10-01"
---

# Fraction

The first version requires that *numerator* and *denominator* are instances
of `numbers.Rational` and returns a new `Fraction` instance
with a value equal to `numerator/denominator`.
If *denominator* is zero, it raises a `ZeroDivisionError`.

The second version requires that *number* is an instance of
`numbers.Rational` or has the `as_integer_ratio` method
(this includes `float` and `decimal.Decimal`).
It returns a `Fraction` instance with exactly the same value.
Assumed, that the `as_integer_ratio` method returns a pair
of coprime integers and last one is positive.
Note that due to the
usual issues with binary point (see `tut-fp-issues`), the
argument to `Fraction(1.1)` is not exactly equal to 11/10, and so
`Fraction(1.1)` does *not* return `Fraction(11, 10)` as one might expect.
(But see the documentation for the `limit_denominator` method below.)

The last version of the constructor expects a string.
The usual form for this instance is::

   [sign] numerator ['/' denominator]

where the optional `sign` may be either '+' or '-' and
`numerator` and `denominator` (if present) are strings of
decimal digits (underscores may be used to delimit digits as with
integral literals in code).  In addition, any string that represents a finite
value and is accepted by the `float` constructor is also
accepted by the `Fraction` constructor.  In either form the
input string may also have leading and/or trailing whitespace.
Here are some examples::

   >>> from fractions import Fraction
   >>> Fraction(16, -10)
   Fraction(-8, 5)
   >>> Fraction(123)
   Fraction(123, 1)
   >>> Fraction()
   Fraction(0, 1)
   >>> Fraction('3/7')
   Fraction(3, 7)
   >>> Fraction(' -3/7 ')
   Fraction(-3, 7)
   >>> Fraction('1.414213 \t\n')
   Fraction(1414213, 1000000)
   >>> Fraction('-.125')
   Fraction(-1, 8)
   >>> Fraction('7e-6')
   Fraction(7, 1000000)
   >>> Fraction(2.25)
   Fraction(9, 4)
   >>> Fraction(1.1)
   Fraction(2476979795053773, 2251799813685248)
   >>> from decimal import Decimal
   >>> Fraction(Decimal('1.1'))
   Fraction(11, 10)

The `Fraction` class inherits from the abstract base class
`numbers.Rational`, and implements all of the methods and
operations from that class.  `Fraction` instances are `hashable`,
and should be treated as immutable.  In addition,
`Fraction` has the following properties and methods:

> *Changed in 3.2*: The :class:`Fraction` constructor now accepts :class:`float` and :class:`decimal.Decimal` instances.

> *Changed in 3.9*: The :func:`math.gcd` function is now used to normalize the *numerator* and *denominator*. :func:`math.gcd` always returns an :class:`int` type. Previously, the GCD type depended on *numerator* and *denominator*.

> *Changed in 3.11*: Underscores are now permitted when creating a :class:`Fraction` instance from a string, following :PEP:`515` rules.

> *Changed in 3.11*: :class:`Fraction` implements ``__int__`` now to satisfy ``typing.SupportsInt`` instance checks.

> *Changed in 3.12*: Space is allowed around the slash for string inputs: ``Fraction('2 / 3')``.

> *Changed in 3.12*: :class:`Fraction` instances now support float-style formatting, with presentation types ``"e"``, ``"E"``, ``"f"``, ``"F"``, ``"g"``, ``"G"`` and ``"%""``.

> *Changed in 3.13*: Formatting of :class:`Fraction` instances without a presentation type now supports fill, alignment, sign handling, minimum width and grouping.

> *Changed in 3.14*: The :class:`Fraction` constructor now accepts any objects with the :meth:`!as_integer_ratio` method.

attribute:: numerator

attribute:: denominator

method:: as_integer_ratio()

method:: is_integer()

classmethod:: from_float(f)

classmethod:: from_decimal(dec)

classmethod:: from_number(number)

method:: limit_denominator(max_denominator=1000000)

method:: __floor__()

method:: __ceil__()

method:: __round__()

method:: __format__(format_spec, /)
