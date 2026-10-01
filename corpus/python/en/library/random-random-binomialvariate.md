---
id: "python-en-function-random-binomialvariate"
language: "python"
lang: "en"
category: "function"
name: "binomialvariate"
signature: "binomialvariate(n=1, p=0.5)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.binomialvariate"
license: "PSF"
updated: "2026-10-01"
---

# binomialvariate

`Binomial distribution
<https://mathworld.wolfram.com/BinomialDistribution.html>`_.
Return the number of successes for *n* independent trials with the
probability of success in each trial being *p*:

Mathematically equivalent to::

    sum(random() < p for i in range(n))

The number of trials *n* should be a non-negative integer.
The probability of success *p* should be between `0.0 <= p <= 1.0`.
The result is an integer in the range `0 <= X <= n`.

> *Added in 3.12*
