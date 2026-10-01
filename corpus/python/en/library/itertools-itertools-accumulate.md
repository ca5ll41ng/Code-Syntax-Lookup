---
id: "python-en-function-itertools-accumulate"
language: "python"
lang: "en"
category: "function"
name: "accumulate"
signature: "accumulate(iterable[, function, *, initial=None])"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/3/library/itertools.html#itertools.accumulate"
license: "PSF"
updated: "2026-10-01"
---

# accumulate

Make an iterator that returns accumulated sums or accumulated
results from other binary functions.

The *function* defaults to addition.  The *function* should accept
two arguments, an accumulated total and a value from the *iterable*.

If an *initial* value is provided, the accumulation will start with
that value and the output will have one more element than the input
iterable.

Roughly equivalent to::

    def accumulate(iterable, function=operator.add, *, initial=None):
        'Return running totals'
        # accumulate([1,2,3,4,5]) → 1 3 6 10 15
        # accumulate([1,2,3,4,5], initial=100) → 100 101 103 106 110 115
        # accumulate([1,2,3,4,5], operator.mul) → 1 2 6 24 120

        iterator = iter(iterable)
        total = initial
        if initial is None:
            try:
                total = next(iterator)
            except StopIteration:
                return

        yield total
        for element in iterator:
            total = function(total, element)
            yield total

To compute a running minimum, set *function* to `min`.
For a running maximum, set *function* to `max`.
Or for a running product, set *function* to `operator.mul`.
To build an `amortization table
<https://www.ramseysolutions.com/real-estate/amortization-schedule>`_,
accumulate the interest and apply payments:

```python

>>> data = [3, 4, 6, 2, 1, 9, 0, 7, 5, 8]
>>> list(accumulate(data, max))              # running maximum
[3, 4, 6, 6, 6, 9, 9, 9, 9, 9]
>>> list(accumulate(data, operator.mul))     # running product
[3, 12, 72, 144, 144, 1296, 0, 0, 0, 0]

# Amortize a 5% loan of 1000 with 10 annual payments of 90
>>> update = lambda balance, payment: round(balance * 1.05) - payment
>>> list(accumulate(repeat(90, 10), update, initial=1_000))
[1000, 960, 918, 874, 828, 779, 728, 674, 618, 559, 497]
```

See `functools.reduce` for a similar function that returns only the
final accumulated value.

> *Added in 3.2*

> *Changed in 3.3*: Added the optional *function* parameter.

> *Changed in 3.8*: Added the optional *initial* parameter.
