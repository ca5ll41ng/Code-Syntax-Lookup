---
id: "python-en-function-random-shuffle"
language: "python"
lang: "en"
category: "function"
name: "shuffle"
signature: "shuffle(x)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.shuffle"
license: "PSF"
updated: "2026-10-01"
---

# shuffle

Shuffle the sequence *x* in place.

To shuffle an immutable sequence and return a new shuffled list, use
`sample(x, k=len(x))` instead.

Note that even for small `len(x)`, the total number of permutations of *x*
can quickly grow larger than the period of most random number generators.
This implies that most permutations of a long sequence can never be
generated.  For example, a sequence of length 2080 is the largest that
can fit within the period of the Mersenne Twister random number generator.

> *Changed in 3.11*: Removed the optional parameter *random*.
