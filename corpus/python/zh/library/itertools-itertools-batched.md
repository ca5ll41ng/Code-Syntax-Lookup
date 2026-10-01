---
id: "python-zh-function-itertools-batched"
language: "python"
lang: "zh"
category: "function"
name: "batched"
signature: "batched(iterable, n, *, strict=False)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.batched"
license: "PSF"
updated: "2026-10-01"
---

# batched

Batch data from the *iterable* into tuples of length *n*. The last
batch may be shorter than *n*.

If *strict* is true, will raise a `ValueError` if the final
batch is shorter than *n*.

Loops over the input iterable and accumulates data into tuples up to
size *n*.  The input is consumed lazily, just enough to fill a batch.
The result is yielded as soon as the batch is full or when the input
iterable is `exhausted`:

```python

>>> flattened_data = ['roses', 'red', 'violets', 'blue', 'sugar', 'sweet']
>>> unflattened = list(batched(flattened_data, 2))
>>> unflattened
[('roses', 'red'), ('violets', 'blue'), ('sugar', 'sweet')]
```

大致相当于::

   def batched(iterable, n, *, strict=False):
       # batched('ABCDEFG', 3) → ABC DEF G
       if n < 1:
           raise ValueError('n must be at least one')
       iterator = iter(iterable)
       while batch := tuple(islice(iterator, n)):
           if strict and len(batch) != n:
               raise ValueError('batched(): incomplete batch')
           yield batch

> *Added in 3.12*

> *Changed in 3.13*: Added the *strict* option.
