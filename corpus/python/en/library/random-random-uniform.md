---
id: "python-en-function-random-uniform"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "uniform"
signature: "uniform(a, b)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.uniform"
license: "PSF"
updated: "2026-10-01"
---

# uniform

Return a random floating-point number *N* such that `a <= N <= b` for
`a <= b` and `b <= N <= a` for `b < a`.

The end-point value `b` may or may not be included in the range
depending on floating-point rounding in the expression
`a + (b-a) * random()`.
