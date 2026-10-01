---
id: "python-zh-function-itertools-permutations"
language: "python"
lang: "zh"
category: "function"
name: "permutations"
signature: "permutations(iterable, r=None)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.permutations"
license: "PSF"
updated: "2026-10-01"
---

# permutations

Return successive *r* length `permutations of elements
<https://www.britannica.com/science/permutation>`_ from the *iterable*.

If *r* is not specified or is `None`, then *r* defaults to the length
of the *iterable* and all possible full-length permutations
are generated.

The output is a subsequence of `product` where entries with
repeated elements have been filtered out.  The length of the output is
given by `math.perm` which computes `n! / (n - r)!` when
`0 ≤ r ≤ n` or zero when `r > n`.

The permutation tuples are emitted in lexicographic order according to
the order of the input *iterable*.  If the input *iterable* is sorted,
the output tuples will be produced in sorted order.

Elements are treated as unique based on their position, not on their
value.  If the input elements are unique, there will be no repeated
values within a permutation.

大致相当于::

     def permutations(iterable, r=None):
         # permutations('ABCD', 2) → AB AC AD BA BC BD CA CB CD DA DB DC
         # permutations(range(3)) → 012 021 102 120 201 210

         pool = tuple(iterable)
         n = len(pool)
         r = n if r is None else r
         if r > n:
             return

         indices = list(range(n))
         cycles = list(range(n, n-r, -1))
         yield tuple(pool[i] for i in indices[:r])

         while n:
             for i in reversed(range(r)):
                 cycles[i] -= 1
                 if cycles[i] == 0:
                     indices[i:] = indices[i+1:] + indices[i:i+1]
                     cycles[i] = n - i
                 else:
                     j = cycles[i]
                     indices[i], indices[-j] = indices[-j], indices[i]
                     yield tuple(pool[i] for i in indices[:r])
                     break
             else:
                 return
