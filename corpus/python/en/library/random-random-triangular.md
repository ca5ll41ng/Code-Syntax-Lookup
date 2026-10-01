---
id: "python-en-function-random-triangular"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "triangular"
signature: "triangular(low, high, mode)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.triangular"
license: "PSF"
updated: "2026-10-01"
---

# triangular

Return a random floating-point number *N* such that `low <= N <= high` and
with the specified *mode* between those bounds.  The *low* and *high* bounds
default to zero and one.  The *mode* argument defaults to the midpoint
between the bounds, giving a symmetric distribution.
