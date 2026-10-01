---
id: "python-en-function-math-integer-perm"
language: "python"
lang: "en"
category: "function"
name: "perm"
signature: "perm(n, k=None, /)"
directive: "function"
module: "math.integer"
source_url: "https://docs.python.org/3/library/math.integer.html#math.integer.perm"
license: "PSF"
updated: "2026-10-01"
---

# perm

Return the number of ways to choose *k* items from *n* items
without repetition and with order.

Evaluates to `n! / (n - k)!` when `k <= n` and evaluates
to zero when `k > n`.

If *k* is not specified or is `None`, then *k* defaults to *n*
and the function returns `n!`.

Raises `ValueError` if either of the arguments are negative.
