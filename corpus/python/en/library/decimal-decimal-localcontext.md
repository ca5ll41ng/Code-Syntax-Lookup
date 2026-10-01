---
id: "python-en-function-decimal-localcontext"
language: "python"
lang: "en"
category: "function"
name: "localcontext"
signature: "localcontext(ctx=None, **kwargs)"
directive: "function"
module: "decimal"
source_url: "https://docs.python.org/3/library/decimal.html#decimal.localcontext"
license: "PSF"
updated: "2026-10-01"
---

# localcontext

Return a context manager that will set the current context for the active thread
to a copy of *ctx* on entry to the with-statement and restore the previous context
when exiting the with-statement. If no context is specified, a copy of the
current context is used.  The *kwargs* argument is used to set the attributes
of the new context.

For example, the following code sets the current decimal precision to 42 places,
performs a calculation, and then automatically restores the previous context::

   from decimal import localcontext

   with localcontext() as ctx:
       ctx.prec = 42   # Perform a high precision calculation
       s = calculate_something()
   s = +s  # Round the final result back to the default precision

Using keyword arguments, the code would be the following::

   from decimal import localcontext

   with localcontext(prec=42) as ctx:
       s = calculate_something()
   s = +s

Raises `TypeError` if *kwargs* supplies an attribute that `Context` doesn't
support.  Raises either `TypeError` or `ValueError` if *kwargs* supplies an
invalid value for an attribute.

> *Changed in 3.11*: :meth:`localcontext` now supports setting context attributes through the use of keyword arguments.
