---
id: "python-zh-function-itertools-islice"
language: "python"
lang: "zh"
category: "function"
name: "islice"
signature: "islice(iterable, stop)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.islice"
license: "PSF"
updated: "2026-10-01"
---

# islice

Make an iterator that returns selected elements from the iterable.
Works like sequence slicing but does not support negative values for
*start*, *stop*, or *step*.

If *start* is zero or `None`, iteration starts at zero.  Otherwise,
elements from the iterable are skipped until *start* is reached.

If *stop* is `None`, iteration continues until the input is
`exhausted`, if at all.  Otherwise, it stops at the specified position.

If *step* is `None`, the step defaults to one.  Elements are returned
consecutively unless *step* is set higher than one which results in
items being skipped.

大致相当于::

   def islice(iterable, *args):
       # islice('ABCDEFG', 2) → A B
       # islice('ABCDEFG', 2, 4) → C D
       # islice('ABCDEFG', 2, None) → C D E F G
       # islice('ABCDEFG', 0, None, 2) → A C E G

       s = slice(*args)
       start = 0 if s.start is None else s.start
       stop = s.stop
       step = 1 if s.step is None else s.step
       if start < 0 or (stop is not None and stop < 0) or step <= 0:
           raise ValueError

       indices = count() if stop is None else range(max(start, stop))
       next_i = start
       for i, element in zip(indices, iterable):
           if i == next_i:
               yield element
               next_i += step

If the input is an iterator, then fully consuming the *islice*
advances the input iterator by `max(start, stop)` steps regardless
of the *step* value.
