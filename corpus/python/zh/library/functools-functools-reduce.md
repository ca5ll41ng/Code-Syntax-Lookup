---
id: "python-zh-function-functools-reduce"
language: "python"
lang: "zh"
category: "function"
name: "reduce"
signature: "reduce(function, iterable, /[, initial])"
directive: "function"
module: "functools"
source_url: "https://docs.python.org/zh-cn/3/library/functools.html#functools.reduce"
license: "PSF"
updated: "2026-10-01"
---

# reduce

Apply *function* of two arguments cumulatively to the items of *iterable*, from
left to right, so as to reduce the iterable to a single value.  For example,
`reduce(lambda x, y: x+y, [1, 2, 3, 4, 5])` calculates `((((1+2)+3)+4)+5)`.
The left argument, *x*, is the accumulated value and the right argument, *y*, is
the update value from the *iterable*.  If the optional *initial* is present,
it is placed before the items of the iterable in the calculation, and serves as
a default when the iterable is empty.  If *initial* is not given and
*iterable* contains only one item, the first item is returned.

大致相当于::

   initial_missing = sentinel('initial_missing')

   def reduce(function, iterable, /, initial=initial_missing):
       it = iter(iterable)
       if initial is initial_missing:
           value = next(it)
       else:
           value = initial
       for element in it:
           value = function(value, element)
       return value

See `itertools.accumulate` for an iterator that yields all intermediate
values.

> *Changed in 3.14*: *initial* is now supported as a keyword argument.
