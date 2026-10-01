---
id: "python-zh-function-itertools-tee"
language: "python"
lang: "zh"
category: "function"
name: "tee"
signature: "tee(iterable, n=2)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.tee"
license: "PSF"
updated: "2026-10-01"
---

# tee

从一个可迭代对象中返回 *n* 个独立的迭代器。

大致相当于::

     def tee(iterable, n=2):
         if n < 0:
             raise ValueError
         if n == 0:
             return ()
         iterator = _tee(iterable)
         result = [iterator]
         for _ in range(n - 1):
             result.append(_tee(iterator))
         return tuple(result)

     class _tee:

         def __init__(self, iterable):
             it = iter(iterable)
             if isinstance(it, _tee):
                 self.iterator = it.iterator
                 self.link = it.link
             else:
                 self.iterator = it
                 self.link = [None, None]

         def __iter__(self):
             return self

         def __next__(self):
             link = self.link
             if link[1] is None:
                 link[0] = next(self.iterator)
                 link[1] = [None, None]
             value, self.link = link
             return value

When the input *iterable* is already a tee iterator object, all
members of the return tuple are constructed as if they had been
produced by the upstream `tee` call.  This "flattening step"
allows nested `tee` calls to share the same underlying data
chain and to have a single update step rather than a chain of calls.

展平的特征属性使得 tee 迭代器可被高效地查看：

```python

def lookahead(tee_iterator):
     "Return the next value without moving the input forward"
     [forked_iterator] = tee(tee_iterator, 1)
     return next(forked_iterator)
```

```python

>>> iterator = iter('abcdef')
>>> [iterator] = tee(iterator, 1)   # Make the input peekable
>>> next(iterator)                  # Move the iterator forward
'a'
>>> lookahead(iterator)             # Check next value
'b'
>>> next(iterator)                  # Continue moving forward
'b'
```

`tee` iterators are not threadsafe. A `RuntimeError` may be
raised when simultaneously using iterators returned by the same `tee`
call, even if the original *iterable* is threadsafe.

This itertool may require significant auxiliary storage (depending on how
much temporary data needs to be stored). In general, if one iterator uses
most or all of the data before another iterator starts, it is faster to use
`list` instead of `tee`.
