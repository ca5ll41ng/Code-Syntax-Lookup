---
id: "python-en-function-random-choices"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "choices"
signature: "choices(population, weights=None, *, cum_weights=None, k=1)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.choices"
license: "PSF"
updated: "2026-10-01"
---

# choices

Return a *k* sized list of elements chosen from the *population* with replacement.
If the *population* is empty, raises `IndexError`.

If a *weights* sequence is specified, selections are made according to the
relative weights.  Alternatively, if a *cum_weights* sequence is given, the
selections are made according to the cumulative weights (perhaps computed
using `itertools.accumulate`).  For example, the relative weights
`[10, 5, 30, 5]` are equivalent to the cumulative weights
`[10, 15, 45, 50]`.  Internally, the relative weights are converted to
cumulative weights before making selections, so supplying the cumulative
weights saves work.

If neither *weights* nor *cum_weights* are specified, selections are made
with equal probability.  If a weights sequence is supplied, it must be
the same length as the *population* sequence.  It is a `TypeError`
to specify both *weights* and *cum_weights*.

The *weights* or *cum_weights* can use any numeric type that interoperates
with the `float` values returned by `random` (that includes
integers, floats, and fractions but excludes decimals).  Weights are assumed
to be non-negative and finite.  A `ValueError` is raised if all
weights are zero.

For a given seed, the `choices` function with equal weighting
typically produces a different sequence than repeated calls to
`choice`.  The algorithm used by `choices` uses floating-point
arithmetic for internal consistency and speed.  The algorithm used
by `choice` defaults to integer arithmetic with repeated selections
to avoid small biases from round-off error.

> *Added in 3.6*

> *Changed in 3.9*: Raises a :exc:`ValueError` if all weights are zero.
