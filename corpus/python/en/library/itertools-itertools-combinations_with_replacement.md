---
id: "python-en-function-itertools-combinations_with_replacement"
language: "python"
lang: "en"
category: "function"
name: "combinations_with_replacement"
signature: "combinations_with_replacement(iterable, r)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.combinations_with_replacement"
license: "PSF"
updated: "2026-10-01"
---

# combinations_with_replacement

Return *r* length subsequences of elements from the input *iterable*
allowing individual elements to be repeated more than once.

The output is a subsequence of `product` that keeps only entries
that are subsequences (with possible repeated elements) of the
*iterable*.  The number of subsequence returned is `(n + r - 1)! / r! /
(n - 1)!` when `n > 0`.

The combination tuples are emitted in lexicographic order according to
the order of the input *iterable*. if the input *iterable* is sorted,
the output tuples will be produced in sorted order.

Elements are treated as unique based on their position, not on their
value.  If the input elements are unique, the generated combinations
will also be unique.

Roughly equivalent to::

     def combinations_with_replacement(iterable, r):
         # combinations_with_replacement('ABC', 2) → AA AB AC BB BC CC

         pool = tuple(iterable)
         n = len(pool)
         if not n and r:
             return
         indices = [0] * r

         yield tuple(pool[i] for i in indices)
         while True:
             for i in reversed(range(r)):
                 if indices[i] != n - 1:
                     break
             else:
                 return
             indices[i:] = [indices[i] + 1] * (r - i)
             yield tuple(pool[i] for i in indices)

> *Added in 3.1*
