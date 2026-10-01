---
id: "python-en-function-decimal-decimal"
language: "python"
lang: "en"
category: "function"
name: "decimal"
title: "The following table summarizes the hierarchy of signals::"
directive: "module"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#module-decimal"
license: "PSF"
updated: "2026-10-01"
---

# The following table summarizes the hierarchy of signals::

The following table summarizes the hierarchy of signals::

   exceptions.ArithmeticError(exceptions.Exception)
       DecimalException
           Clamped
           DivisionByZero(DecimalException, exceptions.ZeroDivisionError)
           Inexact
               Overflow(Inexact, Rounded)
               Underflow(Inexact, Rounded, Subnormal)
           InvalidOperation
           Rounded
           Subnormal
           FloatOperation(DecimalException, exceptions.TypeError)

.. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

.. _decimal-notes:

**Floating-point notes**

**Mitigating round-off error with increased precision**

The use of decimal floating point eliminates decimal representation error
(making it possible to represent `0.1` exactly); however, some operations
can still incur round-off error when non-zero digits exceed the fixed precision.

The effects of round-off error can be amplified by the addition or subtraction
of nearly offsetting quantities resulting in loss of significance.  Knuth
provides two instructive examples where rounded floating-point arithmetic with
insufficient precision causes the breakdown of the associative and distributive
properties of addition:

```python

# Examples from Seminumerical Algorithms, Section 4.2.2.
>>> from decimal import Decimal, getcontext
>>> getcontext().prec = 8

>>> u, v, w = Decimal(11111113), Decimal(-11111111), Decimal('7.51111111')
>>> (u + v) + w
Decimal('9.5111111')
>>> u + (v + w)
Decimal('10')

>>> u, v, w = Decimal(20000), Decimal(-6), Decimal('6.0000003')
>>> (u*v) + (u*w)
Decimal('0.01')
>>> u * (v+w)
Decimal('0.0060000')
```

The `decimal` module makes it possible to restore the identities by
expanding the precision sufficiently to avoid loss of significance:

```python

>>> getcontext().prec = 20
>>> u, v, w = Decimal(11111113), Decimal(-11111111), Decimal('7.51111111')
>>> (u + v) + w
Decimal('9.51111111')
>>> u + (v + w)
Decimal('9.51111111')
>>>
>>> u, v, w = Decimal(20000), Decimal(-6), Decimal('6.0000003')
>>> (u*v) + (u*w)
Decimal('0.0060000')
>>> u * (v+w)
Decimal('0.0060000')
```

**Special values**

The number system for the `decimal` module provides special values
including `NaN`, `sNaN`, `-Infinity`, `Infinity`,
and two zeros, `+0` and `-0`.

Infinities can be constructed directly with:  `Decimal('Infinity')`. Also,
they can arise from dividing by zero when the `DivisionByZero` signal is
not trapped.  Likewise, when the `Overflow` signal is not trapped, infinity
can result from rounding beyond the limits of the largest representable number.

The infinities are signed (affine) and can be used in arithmetic operations
where they get treated as very large, indeterminate numbers.  For instance,
adding a constant to infinity gives another infinite result.

Some operations are indeterminate and return `NaN`, or if the
`InvalidOperation` signal is trapped, raise an exception.  For example,
`0/0` returns `NaN` which means "not a number".  This variety of
`NaN` is quiet and, once created, will flow through other computations
always resulting in another `NaN`.  This behavior can be useful for a
series of computations that occasionally have missing inputs --- it allows the
calculation to proceed while flagging specific results as invalid.

A variant is `sNaN` which signals rather than remaining quiet after every
operation.  This is a useful return value when an invalid result needs to
interrupt a calculation for special handling.

The behavior of Python's comparison operators can be a little surprising where a
`NaN` is involved.  A test for equality where one of the operands is a
quiet or signaling `NaN` always returns `False` (even when doing
`Decimal('NaN')==Decimal('NaN')`), while a test for inequality always returns
`True`.  An attempt to compare two Decimals using any of the `<`,
`<=`, `>` or `>=` operators will raise the `InvalidOperation` signal
if either operand is a `NaN`, and return `False` if this signal is
not trapped.  Note that the General Decimal Arithmetic specification does not
specify the behavior of direct comparisons; these rules for comparisons
involving a `NaN` were taken from the IEEE 854 standard (see Table 3 in
section 5.7).  To ensure strict standards-compliance, use the `~Decimal.compare`
and `~Decimal.compare_signal` methods instead.

The signed zeros can result from calculations that underflow. They keep the sign
that would have resulted if the calculation had been carried out to greater
precision.  Since their magnitude is zero, both positive and negative zeros are
treated as equal and their sign is informational.

In addition to the two signed zeros which are distinct yet equal, there are
various representations of zero with differing precisions yet equivalent in
value.  This takes a bit of getting used to.  For an eye accustomed to
normalized floating-point representations, it is not immediately obvious that
the following calculation returns a value equal to zero:

   >>> 1 / Decimal('Infinity')
   Decimal('0E-1000026')

.. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

.. _decimal-threads:

**Working with threads**

The `getcontext` function accesses a different `Context` object for
each thread.  Having separate thread contexts means that threads may make
changes (such as `getcontext().prec=10`) without interfering with other threads.

Likewise, the `setcontext` function automatically assigns its target to
the current thread.

If `setcontext` has not been called before `getcontext`, then
`getcontext` will automatically create a new context for use in the
current thread.  New context objects have default values set from the
`decimal.DefaultContext` object.

The `sys.flags.thread_inherit_context` flag affects the context for
new threads.  If the flag is false, new threads will start with an empty
context.  In this case, `getcontext` will create a new context object
when called and use the default values from *DefaultContext*.  If the flag
is true, new threads will start with a copy of context from the caller of
`threading.Thread.start`.

To control the defaults so that each thread will use the same values throughout
the application, directly modify the *DefaultContext* object. This should be
done *before* any threads are started so that there won't be a race condition
between threads calling `getcontext`. For example::

   # Set applicationwide defaults for all threads about to be launched
   DefaultContext.prec = 12
   DefaultContext.rounding = ROUND_DOWN
   DefaultContext.traps = ExtendedContext.traps.copy()
   DefaultContext.traps[InvalidOperation] = 1
   setcontext(DefaultContext)

   # Afterwards, the threads can be started
   t1.start()
   t2.start()
   t3.start()
    . . .

.. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

.. _decimal-recipes:

**Recipes**

Here are a few recipes that serve as utility functions and that demonstrate ways
to work with the `Decimal` class::

   def moneyfmt(value, places=2, curr='', sep=',', dp='.',
                pos='', neg='-', trailneg=''):
       """Convert Decimal to a money formatted string.

       places:  required number of places after the decimal point
       curr:    optional currency symbol before the sign (may be blank)
       sep:     optional grouping separator (comma, period, space, or blank)
       dp:      decimal point indicator (comma or period)
                only specify as blank when places is zero
       pos:     optional sign for positive numbers: '+', space or blank
       neg:     optional sign for negative numbers: '-', '(', space or blank
       trailneg:optional trailing minus indicator:  '-', ')', space or blank

       >>> d = Decimal('-1234567.8901')
       >>> moneyfmt(d, curr='$')
       '-$1,234,567.89'
       >>> moneyfmt(d, places=0, sep='.', dp='', neg='', trailneg='-')
       '1.234.568-'
       >>> moneyfmt(d, curr='$', neg='(', trailneg=')')
       '($1,234,567.89)'
       >>> moneyfmt(Decimal(123456789), sep=' ')
       '123 456 789.00'
       >>> moneyfmt(Decimal('-0.02'), neg='<', trailneg='>')
       '<0.02>'

       """
       q = Decimal(10) ** -places      # 2 places --> '0.01'
       sign, digits, exp = value.quantize(q).as_tuple()
       result = []
       digits = list(map(str, digits))
       build, next = result.append, digits.pop
       if sign:
           build(trailneg)
       for i in range(places):
           build(next() if digits else '0')
       if places:
           build(dp)
       if not digits:
           build('0')
       i = 0
       while digits:
           build(next())
           i += 1
           if i == 3 and digits:
               i = 0
               build(sep)
       build(curr)
       build(neg if sign else pos)
       return ''.join(reversed(result))

   def pi():
       """Compute Pi to the current precision.

       >>> print(pi())
       3.141592653589793238462643383

       """
       getcontext().prec += 2  # extra digits for intermediate steps
       three = Decimal(3)      # substitute "three=3.0" for regular floats
       lasts, t, s, n, na, d, da = 0, three, 3, 1, 0, 0, 24
       while s != lasts:
           lasts = s
           n, na = n+na, na+8
           d, da = d+da, da+32
           t = (t * n) / d
           s += t
       getcontext().prec -= 2
       return +s               # unary plus applies the new precision

   def exp(x):
       """Return e raised to the power of x.  Result type matches input type.

       >>> print(exp(Decimal(1)))
       2.718281828459045235360287471
       >>> print(exp(Decimal(2)))
       7.389056098930650227230427461
       >>> print(exp(2.0))
       7.38905609893
       >>> print(exp(2+0j))
       (7.38905609893+0j)

       """
       getcontext().prec += 2
       i, lasts, s, fact, num = 0, 0, 1, 1, 1
       while s != lasts:
           lasts = s
           i += 1
           fact *= i
           num *= x
           s += num / fact
       getcontext().prec -= 2
       return +s

   def cos(x):
       """Return the cosine of x as measured in radians.

       The Taylor series approximation works best for a small value of x.
       For larger values, first compute x = x % (2 * pi).

       >>> print(cos(Decimal('0.5')))
       0.8775825618903727161162815826
       >>> print(cos(0.5))
       0.87758256189
       >>> print(cos(0.5+0j))
       (0.87758256189+0j)

       """
       getcontext().prec += 2
       i, lasts, s, fact, num, sign = 0, 0, 1, 1, 1, 1
       while s != lasts:
           lasts = s
           i += 2
           fact *= i * (i-1)
           num *= x * x
           sign *= -1
           s += num / fact * sign
       getcontext().prec -= 2
       return +s

   def sin(x):
       """Return the sine of x as measured in radians.

       The Taylor series approximation works best for a small value of x.
       For larger values, first compute x = x % (2 * pi).

       >>> print(sin(Decimal('0.5')))
       0.4794255386042030002732879352
       >>> print(sin(0.5))
       0.479425538604
       >>> print(sin(0.5+0j))
       (0.479425538604+0j)

       """
       getcontext().prec += 2
       i, lasts, s, fact, num, sign = 1, 0, x, 1, x, 1
       while s != lasts:
           lasts = s
           i += 2
           fact *= i * (i-1)
           num *= x * x
           sign *= -1
           s += num / fact * sign
       getcontext().prec -= 2
       return +s

.. %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

.. _decimal-faq:

**Decimal FAQ**

Q: It is cumbersome to type `decimal.Decimal('1234.5')`.  Is there a way to
minimize typing when using the interactive interpreter?

A: Some users abbreviate the constructor to just a single letter:

   >>> D = decimal.Decimal
   >>> D('1.23') + D('3.45')
   Decimal('4.68')

Q: In a fixed-point application with two decimal places, some inputs have many
places and need to be rounded.  Others are not supposed to have excess digits
and need to be validated.  What methods should be used?

A: The `~Decimal.quantize` method rounds to a fixed number of decimal places. If
the `Inexact` trap is set, it is also useful for validation:

   >>> TWOPLACES = Decimal(10) ** -2       # same as Decimal('0.01')

   >>> # Round to two places
   >>> Decimal('3.214').quantize(TWOPLACES)
   Decimal('3.21')

   >>> # Validate that a number does not exceed two places
   >>> Decimal('3.21').quantize(TWOPLACES, context=Context(traps=[Inexact]))
   Decimal('3.21')

   >>> Decimal('3.214').quantize(TWOPLACES, context=Context(traps=[Inexact]))
   Traceback (most recent call last):
      ...
   Inexact: None

Q: Once I have valid two place inputs, how do I maintain that invariant
throughout an application?

A: Some operations like addition, subtraction, and multiplication by an integer
will automatically preserve fixed point.  Others operations, like division and
non-integer multiplication, will change the number of decimal places and need to
be followed-up with a `~Decimal.quantize` step:

    >>> a = Decimal('102.72')           # Initial fixed-point values
    >>> b = Decimal('3.17')
    >>> a + b                           # Addition preserves fixed-point
    Decimal('105.89')
    >>> a - b
    Decimal('99.55')
    >>> a * 42                          # So does integer multiplication
    Decimal('4314.24')
    >>> (a * b).quantize(TWOPLACES)     # Must quantize non-integer multiplication
    Decimal('325.62')
    >>> (b / a).quantize(TWOPLACES)     # And quantize division
    Decimal('0.03')

In developing fixed-point applications, it is convenient to define functions
to handle the `~Decimal.quantize` step:

    >>> def mul(x, y, fp=TWOPLACES):
    ...     return (x * y).quantize(fp)
    ...
    >>> def div(x, y, fp=TWOPLACES):
    ...     return (x / y).quantize(fp)

    >>> mul(a, b)                       # Automatically preserve fixed-point
    Decimal('325.62')
    >>> div(b, a)
    Decimal('0.03')

Q: There are many ways to express the same value.  The numbers `200`,
`200.000`, `2E2`, and `.02E+4` all have the same value at
various precisions. Is there a way to transform them to a single recognizable
canonical value?

A: The `~Decimal.normalize` method maps all equivalent values to a single
representative:

   >>> values = map(Decimal, '200 200.000 2E2 .02E+4'.split())
   >>> [v.normalize() for v in values]
   [Decimal('2E+2'), Decimal('2E+2'), Decimal('2E+2'), Decimal('2E+2')]

Q: When does rounding occur in a computation?

A: It occurs *after* the computation.  The philosophy of the decimal
specification is that numbers are considered exact and are created
independent of the current context.  They can even have greater
precision than current context.  Computations process with those
exact inputs and then rounding (or other context operations) is
applied to the *result* of the computation::

   >>> getcontext().prec = 5
   >>> pi = Decimal('3.1415926535')   # More than 5 digits
   >>> pi                             # All digits are retained
   Decimal('3.1415926535')
   >>> pi + 0                         # Rounded after an addition
   Decimal('3.1416')
   >>> pi - Decimal('0.00005')        # Subtract unrounded numbers, then round
   Decimal('3.1415')
   >>> pi + 0 - Decimal('0.00005').   # Intermediate values are rounded
   Decimal('3.1416')

Q: Some decimal values always print with exponential notation.  Is there a way
to get a non-exponential representation?

A: For some values, exponential notation is the only way to express the number
of significant places in the coefficient.  For example, expressing
`5.0E+3` as `5000` keeps the value constant but cannot show the
original's two-place significance.

If an application does not care about tracking significance, it is easy to
remove the exponent and trailing zeroes, losing significance, but keeping the
value unchanged:

    >>> def remove_exponent(d):
    ...     return d.quantize(Decimal(1)) if d == d.to_integral() else d.normalize()

    >>> remove_exponent(Decimal('5E+3'))
    Decimal('5000')

Q: Is there a way to convert a regular float to a `Decimal`?

A: Yes, any binary floating-point number can be exactly expressed as a
Decimal though an exact conversion may take more precision than intuition would
suggest:

```python

>>> Decimal(math.pi)
Decimal('3.141592653589793115997963468544185161590576171875')
```

Q: Within a complex calculation, how can I make sure that I haven't gotten a
spurious result because of insufficient precision or rounding anomalies.

A: The decimal module makes it easy to test results.  A best practice is to
re-run calculations using greater precision and with various rounding modes.
Widely differing results indicate insufficient precision, rounding mode issues,
ill-conditioned inputs, or a numerically unstable algorithm.

Q: I noticed that context precision is applied to the results of operations but
not to the inputs.  Is there anything to watch out for when mixing values of
different precisions?

A: Yes.  The principle is that all values are considered to be exact and so is
the arithmetic on those values.  Only the results are rounded.  The advantage
for inputs is that "what you type is what you get".  A disadvantage is that the
results can look odd if you forget that the inputs haven't been rounded:

```python

>>> getcontext().prec = 3
>>> Decimal('3.104') + Decimal('2.104')
Decimal('5.21')
>>> Decimal('3.104') + Decimal('0.000') + Decimal('2.104')
Decimal('5.20')
```

The solution is either to increase precision or to force rounding of inputs
using the unary plus operation:

```python

>>> getcontext().prec = 3
>>> +Decimal('1.23456789')      # unary plus triggers rounding
Decimal('1.23')
```

Alternatively, inputs can be rounded upon creation using the
`Context.create_decimal` method:

   >>> Context(prec=5, rounding=ROUND_DOWN).create_decimal('1.2345678')
   Decimal('1.2345')

Q: Is the CPython implementation fast for large numbers?

A: Yes.  In the CPython and PyPy3 implementations, the C/CFFI versions of
the decimal module integrate the high speed `libmpdec
<https://www.bytereef.org/mpdecimal/doc/libmpdec/index.html>`_ library for
arbitrary precision correctly rounded decimal floating-point arithmetic [#]_.
`libmpdec` uses `Karatsuba multiplication
<https://en.wikipedia.org/wiki/Karatsuba_algorithm>`_
for medium-sized numbers and the `Number Theoretic Transform
<https://en.wikipedia.org/wiki/Discrete_Fourier_transform_(general)#Number-theoretic_transform>`_
for very large numbers.

The context must be adapted for exact arbitrary precision arithmetic. `~Context.Emin`
and `~Context.Emax` should always be set to the maximum values, `~Context.clamp`
should always be 0 (the default).  Setting `~Context.prec` requires some care.

The easiest approach for trying out bignum arithmetic is to use the maximum
value for `~Context.prec` as well [#]_::

    >>> setcontext(Context(prec=MAX_PREC, Emax=MAX_EMAX, Emin=MIN_EMIN))
    >>> x = Decimal(2) ** 256
    >>> x / 128
    Decimal('904625697166532776746648320380374280103671755200316906558262375061821325312')

For inexact results, `MAX_PREC` is far too large on 64-bit platforms and
the available memory will be insufficient::

   >>> Decimal(1) / 3
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
   MemoryError

On systems with overallocation (e.g. Linux), a more sophisticated approach is to
adjust `~Context.prec` to the amount of available RAM.  Suppose that you have 8GB of
RAM and expect 10 simultaneous operands using a maximum of 500MB each::

   >>> import sys
   >>>
   >>> # Maximum number of digits for a single operand using 500MB in 8-byte words
   >>> # with 19 digits per word (4-byte and 9 digits for the 32-bit build):
   >>> maxdigits = 19 * ((500 * 1024**2) // 8)
   >>>
   >>> # Check that this works:
   >>> c = Context(prec=maxdigits, Emax=MAX_EMAX, Emin=MIN_EMIN)
   >>> c.traps[Inexact] = True
   >>> setcontext(c)
   >>>
   >>> # Fill the available precision with nines:
   >>> x = Decimal(0).logical_invert() * 9
   >>> sys.getsizeof(x)
   524288112
   >>> x + 2
   Traceback (most recent call last):
     File "<stdin>", line 1, in <module>
     decimal.Inexact: [<class 'decimal.Inexact'>]

In general (and especially on systems without overallocation), it is recommended
to estimate even tighter bounds and set the `Inexact` trap if all calculations
are expected to be exact.

.. [#]

> *Added in 3.3*

.. [#]

> *Changed in 3.9*: This approach now works for all exact results except for non-integer powers.
