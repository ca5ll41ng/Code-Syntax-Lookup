---
id: "python-zh-function-itertools-zip_longest"
language: "python"
lang: "zh"
category: "function"
name: "zip_longest"
signature: "zip_longest(*iterables, fillvalue=None)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.zip_longest"
license: "PSF"
updated: "2026-10-01"
---

# zip_longest

Make an iterator that aggregates elements from each of the
*iterables*.

If the iterables are of uneven length, missing values are filled-in
with *fillvalue*.  If not specified, *fillvalue* defaults to `None`.

Iteration continues until the longest iterable is `exhausted`.

大致相当于::

   def zip_longest(*iterables, fillvalue=None):
       # zip_longest('ABCD', 'xy', fillvalue='-') → Ax By C- D-

       iterators = list(map(iter, iterables))
       num_active = len(iterators)
       if not num_active:
           return

       while True:
           values = []
           for i, iterator in enumerate(iterators):
               try:
                   value = next(iterator)
               except StopIteration:
                   num_active -= 1
                   if not num_active:
                       return
                   iterators[i] = repeat(fillvalue)
                   value = fillvalue
               values.append(value)
           yield tuple(values)

If one of the iterables is potentially infinite, then the `zip_longest`
function should be wrapped with something that limits the number of calls
(for example `islice` or `takewhile`).
