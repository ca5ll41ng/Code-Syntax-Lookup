---
id: "python-en-function-itertools-pairwise"
language: "python"
lang: "en"
category: "function"
name: "pairwise"
signature: "pairwise(iterable)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.pairwise"
license: "PSF"
updated: "2026-10-01"
---

# pairwise

Return successive overlapping pairs taken from the input *iterable*.

The number of 2-tuples in the output iterator will be one fewer than the
number of inputs.  It will be empty if the input iterable has fewer than
two values.

Roughly equivalent to::

     def pairwise(iterable):
         # pairwise('ABCDEFG') → AB BC CD DE EF FG

         iterator = iter(iterable)
         a = next(iterator, None)

         for b in iterator:
             yield a, b
             a = b

> *Added in 3.10*
