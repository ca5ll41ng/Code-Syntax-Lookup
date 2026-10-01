---
id: "python-en-function-random-seed"
language: "python"
lang: "en"
category: "function"
name: "seed"
signature: "seed(a=None, version=2)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.seed"
license: "PSF"
updated: "2026-10-01"
---

# seed

Initialize the random number generator.

If *a* is omitted or `None`, the current system time is used.  If
randomness sources are provided by the operating system, they are used
instead of the system time (see the `os.urandom` function for details
on availability).

If *a* is an int, its absolute value is used directly.

With version 2 (the default), a `str`, `bytes`, or `bytearray`
object gets converted to an `int` and all of its bits are used.

With version 1 (provided for reproducing random sequences from older versions
of Python), the algorithm for `str` and `bytes` generates a
narrower range of seeds.

> *Changed in 3.2*: Moved to the version 2 scheme which uses all of the bits in a string seed.

> *Changed in 3.11*: The *seed* must be one of the following types: ``None``, :class:`int`, :class:`float`, :class:`str`, :class:`bytes`, or :class:`bytearray`.
