---
id: "python-en-function-decimal-context"
language: "python"
lang: "en"
category: "function"
name: "Context"
signature: "Context(prec=None, rounding=None, Emin=None, Emax=None, capitals=None, clamp=None, flags=None, traps=None)"
directive: "class"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.Context"
license: "PSF"
updated: "2026-10-01"
---

# Context

Creates a new context.  If a field is not specified or is `None`, the
default values are copied from the `DefaultContext`.  If the *flags*
field is not specified or is `None`, all flags are cleared.

attribute:: prec

attribute:: rounding

attribute:: traps

attribute:: Emin

attribute:: capitals

attribute:: clamp

The `Context` class defines several general purpose methods as well as
a large number of methods for doing arithmetic directly in a given context.
In addition, for each of the `Decimal` methods described above (with
the exception of the `~Decimal.adjusted` and `~Decimal.as_tuple` methods) there is
a corresponding `Context` method.  For example, for a `Context`
instance `C` and `Decimal` instance `x`, `C.exp(x)` is
equivalent to `x.exp(context=C)`.  Each `Context` method accepts a
Python integer (an instance of `int`) anywhere that a
Decimal instance is accepted.

method:: clear_flags()

method:: clear_traps()

method:: copy()

method:: copy_decimal(num, /)

method:: create_decimal(num='0', /)

method:: create_decimal_from_float(f, /)

method:: Etiny()

method:: Etop()

The usual approach to working with decimals is to create `Decimal`
instances and then apply arithmetic operations which take place within the
current context for the active thread.  An alternative approach is to use
context methods for calculating within a specific context.  The methods are
similar to those for the `Decimal` class and are only briefly
recounted here.

method:: abs(x, /)

method:: add(x, y, /)

method:: canonical(x, /)

method:: compare(x, y, /)

method:: compare_signal(x, y, /)

method:: compare_total(x, y, /)

method:: compare_total_mag(x, y, /)

method:: copy_abs(x, /)

method:: copy_negate(x, /)

method:: copy_sign(x, y, /)

method:: divide(x, y, /)

method:: divide_int(x, y, /)

method:: divmod(x, y, /)

method:: exp(x, /)

method:: fma(x, y, z, /)

method:: is_canonical(x, /)

method:: is_finite(x, /)

method:: is_infinite(x, /)

method:: is_nan(x, /)

method:: is_normal(x, /)

method:: is_qnan(x, /)

method:: is_signed(x, /)

method:: is_snan(x, /)

method:: is_subnormal(x, /)

method:: is_zero(x, /)

method:: ln(x, /)

method:: log10(x, /)

method:: logb(x, /)

method:: logical_and(x, y, /)

method:: logical_invert(x, /)

method:: logical_or(x, y, /)

method:: logical_xor(x, y, /)

method:: max(x, y, /)

method:: max_mag(x, y, /)

method:: min(x, y, /)

method:: min_mag(x, y, /)

method:: minus(x, /)

method:: multiply(x, y, /)

method:: next_minus(x, /)

method:: next_plus(x, /)

method:: next_toward(x, y, /)

method:: normalize(x, /)

method:: number_class(x, /)

method:: plus(x, /)

method:: power(x, y, modulo=None)

method:: quantize(x, y, /)

method:: radix()

method:: remainder(x, y, /)

method:: remainder_near(x, y, /)

method:: rotate(x, y, /)

method:: same_quantum(x, y, /)

method:: scaleb (x, y, /)

method:: shift(x, y, /)

method:: sqrt(x, /)

method:: subtract(x, y, /)

method:: to_eng_string(x, /)

method:: to_integral_exact(x, /)

method:: to_sci_string(x, /)
