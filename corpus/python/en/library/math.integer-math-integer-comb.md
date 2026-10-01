---
id: "python-en-function-math-integer-comb"
language: "python"
lang: "en"
category: "function"
name: "comb"
signature: "comb(n, k, /)"
directive: "function"
module: "math.integer"
source_url: "https://docs.python.org/3/library/math.integer.html#math.integer.comb"
license: "PSF"
updated: "2026-10-01"
---

# comb

Return the number of ways to choose *k* items from *n* items without repetition
and without order.

Evaluates to `n! / (k! * (n - k)!)` when `k <= n` and evaluates
to zero when `k > n`.

Also called the binomial coefficient because it is equivalent
to the coefficient of k-th term in polynomial expansion of
`(1 + x)ⁿ`.

Raises `ValueError` if either of the arguments are negative.
