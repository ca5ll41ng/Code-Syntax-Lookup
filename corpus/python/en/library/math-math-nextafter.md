---
id: "python-en-function-math-nextafter"
language: "python"
lang: "en"
category: "function"
name: "nextafter"
signature: "nextafter(x, y, steps=1)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.nextafter"
license: "PSF"
updated: "2026-10-01"
---

# nextafter

Return the floating-point value *steps* steps after *x* towards *y*.

If *x* is equal to *y*, return *y*, unless *steps* is zero.

Examples:

* `math.nextafter(x, math.inf)` goes up: towards positive infinity.
* `math.nextafter(x, -math.inf)` goes down: towards minus infinity.
* `math.nextafter(x, 0.0)` goes towards zero.
* `math.nextafter(x, math.copysign(math.inf, x))` goes away from zero.

See also `math.ulp`.

> *Added in 3.9*

> *Changed in 3.12*: Added the *steps* argument.
