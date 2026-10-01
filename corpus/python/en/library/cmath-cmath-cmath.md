---
id: "python-en-function-cmath-cmath"
language: "python"
lang: "en"
category: "function"
name: "cmath"
title: "Note that the selection of functions is similar, but not identical, to that in"
directive: "module"
module: "cmath"
source_url: "https://docs.python.org/3/library/cmath.html#module-cmath"
license: "PSF"
updated: "2026-10-01"
---

# Note that the selection of functions is similar, but not identical, to that in

Note that the selection of functions is similar, but not identical, to that in
module `math`.  The reason for having two modules is that some users aren't
interested in complex numbers, and perhaps don't even know what they are.  They
would rather have `math.sqrt(-1)` raise an exception than return a complex
number. Also note that the functions defined in `cmath` always return a
complex number, even if the answer can be expressed as a real number (in which
case the complex number has an imaginary part of zero).

A note on branch cuts: They are curves along which the given function fails to
be continuous.  They are a necessary feature of many complex functions.  It is
assumed that if you need to compute with complex functions, you will understand
about branch cuts.  Consult almost any (not too elementary) book on complex
variables for enlightenment.  For information of the proper choice of branch
cuts for numerical purposes, a good reference should be the following:

> **Seealso**
>
> Kahan, W:  Branch cuts for complex elementary functions; or, Much ado about
> nothing's sign bit.  In Iserles, A., and Powell, M. (eds.), The state of the art
> in numerical analysis. Clarendon Press (1987) pp165--211.
>
