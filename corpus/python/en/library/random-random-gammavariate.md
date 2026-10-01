---
id: "python-en-function-random-gammavariate"
language: "python"
lang: "en"
category: "function"
name: "gammavariate"
signature: "gammavariate(alpha, beta)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.gammavariate"
license: "PSF"
updated: "2026-10-01"
---

# gammavariate

Gamma distribution.  (*Not* the gamma function!)  The shape and
scale parameters, *alpha* and *beta*, must have positive values.
(Calling conventions vary and some sources define 'beta'
as the inverse of the scale).

The probability distribution function is::

              x ** (alpha - 1) * math.exp(-x / beta)
    pdf(x) =  --------------------------------------
                math.gamma(alpha) * beta ** alpha
