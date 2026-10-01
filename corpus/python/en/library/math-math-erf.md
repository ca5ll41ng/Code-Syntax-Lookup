---
id: "python-en-function-math-erf"
language: "python"
lang: "en"
category: "function"
name: "erf"
signature: "erf(x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.erf"
license: "PSF"
updated: "2026-10-01"
---

# erf

Return the [error function](https://en.wikipedia.org/wiki/Error_function) at
*x*.

The `erf` function can be used to compute traditional statistical
functions such as the `cumulative standard normal distribution
<https://en.wikipedia.org/wiki/Cumulative_distribution_function>`_::

  def phi(x):
      'Cumulative distribution function for the standard normal distribution'
      return (1.0 + erf(x / sqrt(2.0))) / 2.0

> *Added in 3.2*
