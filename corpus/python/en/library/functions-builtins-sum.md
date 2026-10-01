---
id: "python-en-function-builtins-sum"
language: "python"
lang: "en"
category: "function"
name: "sum"
signature: "sum(iterable, /, start=0)"
directive: "function"
module: "builtins"
source_url: "https://docs.python.org/3/library/functions.html#sum"
license: "PSF"
updated: "2026-10-01"
---

# sum

Sums *start* and the items of an *iterable* from left to right and returns the
total.  The *iterable*'s items are normally numbers, and the start value is not
allowed to be a string.

For some use cases, there are good alternatives to `sum`.
The preferred, fast way to concatenate a sequence of strings is by calling
`''.join(sequence)`.  To add floating-point values with extended precision,
see `math.fsum`\.  To concatenate a series of iterables, consider using
`itertools.chain`.

> *Changed in 3.8*: The *start* parameter can be specified as a keyword argument.

> *Changed in 3.12 Summation of floats switched to an algorithm*: that gives higher accuracy and better commutativity on most builds.

> *Changed in 3.14*: Added specialization for summation of complexes, using same algorithm as for summation of floats.
