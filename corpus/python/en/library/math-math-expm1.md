---
id: "python-en-function-math-expm1"
language: "python"
lang: "en"
category: "function"
name: "expm1"
signature: "expm1(x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.expm1"
license: "PSF"
updated: "2026-10-01"
---

# expm1

Return *e* raised to the power *x*, minus 1.  Here *e* is the base of natural
logarithms.  For small floats *x*, the subtraction in `exp(x) - 1`
can result in a `significant loss of precision
<https://en.wikipedia.org/wiki/Loss_of_significance>`_\; the `expm1`
function provides a way to compute this quantity to full precision:

   >>> from math import exp, expm1
   >>> exp(1e-5) - 1  # gives result accurate to 11 places
   1.0000050000069649e-05
   >>> expm1(1e-5)    # result accurate to full precision
   1.0000050000166668e-05

> *Added in 3.2*
