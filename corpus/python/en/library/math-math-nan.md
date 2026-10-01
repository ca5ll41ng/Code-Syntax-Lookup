---
id: "python-en-function-math-nan"
language: "python"
lang: "en"
category: "function"
name: "nan"
directive: "data"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.nan"
license: "PSF"
updated: "2026-10-01"
---

# nan

A floating-point "not a number" (NaN) value. Equivalent to the output of
`float('nan')`. Due to the requirements of the `IEEE-754 standard
<https://en.wikipedia.org/wiki/IEEE_754>`_, `math.nan` and `float('nan')` are
not considered to equal to any other numeric value, including themselves. To check
whether a number is a NaN, use the `isnan` function to test
for NaNs instead of `is` or `==`.
Example:

   >>> import math
   >>> math.nan == math.nan
   False
   >>> float('nan') == float('nan')
   False
   >>> math.isnan(math.nan)
   True
   >>> math.isnan(float('nan'))
   True

> *Added in 3.5*

> *Changed in 3.11*: It is now always available.
