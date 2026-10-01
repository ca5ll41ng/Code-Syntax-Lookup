---
id: "python-en-function-math-atan2pi"
language: "python"
lang: "en"
category: "function"
name: "atan2pi"
signature: "atan2pi(y, x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.atan2pi"
license: "PSF"
updated: "2026-10-01"
---

# atan2pi

Return `atanpi(y / x)`, in half-turns. The result is between `-1` and `1`.
The vector in the plane from the origin to point `(x, y)` makes this angle
with the positive X axis. The point of `atan2pi` is that the signs of both
inputs are known to it, so it can compute the correct quadrant for the angle.
For example, `atanpi(1)` and `atan2pi(1, 1)` are both `0.25`, but
`atan2pi(-1, -1)` is `-0.75`.

> *Added in next*
