---
id: "python-en-function-itertools-combinations"
language: "python"
lang: "en"
category: "function"
name: "combinations"
signature: "combinations(iterable, r)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.combinations"
license: "PSF"
updated: "2026-10-01"
---

# combinations

Return *r* length subsequences of elements from the input *iterable*.

The output is a subsequence of `product` keeping only entries that
are subsequences of the *iterable*.  The length of the output is given
by `math.comb` which computes `n! / r! / (n - r)!` when `0 ≤ r
≤ n` or zero when `r > n`.

The combination tuples are emitted in lexicographic order according to
the order of the input *iterable*. If the input *iterable* is sorted,
the output tuples will be produced in sorted order.

Elements are treated as unique based on their position, not on their
value.  If the input elements are unique, there will be no repeated
values within each combination.

Roughly equivalent to::

     def combinations(iterable, r):
         # combinations('ABCD', 2) → AB AC AD BC BD CD
         # combinations(range(4), 3) → 012 013 023 123

         pool = tuple(iterable)
         n = len(pool)
         if r > n:
             return
         indices = list(range(r))

         yield tuple(pool[i] for i in indices)
         while True:
             for i in reversed(range(r)):
                 if indices[i] != i + n - r:
                     break
             else:
                 return
             indices[i] += 1
             for j in range(i+1, r):
                 indices[j] = indices[j-1] + 1
             yield tuple(pool[i] for i in indices)
