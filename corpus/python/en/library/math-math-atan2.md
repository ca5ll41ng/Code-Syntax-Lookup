---
id: "python-en-function-math-atan2"
language: "python"
lang: "en"
category: "function"
name: "atan2"
signature: "atan2(y, x)"
directive: "function"
module: "math"
source_url: "https://docs.python.org/3/library/math.html#math.atan2"
license: "PSF"
updated: "2026-10-01"
---

# atan2

Return `atan(y / x)`, in radians. The result is between `-pi` and `pi`.
The vector in the plane from the origin to point `(x, y)` makes this angle
with the positive X axis. The point of `atan2` is that the signs of both
inputs are known to it, so it can compute the correct quadrant for the angle.
For example, `atan(1)` and `atan2(1, 1)` are both `pi/4`, but `atan2(-1,
-1)` is `-3*pi/4`.
