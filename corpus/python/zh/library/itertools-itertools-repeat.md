---
id: "python-zh-function-itertools-repeat"
language: "python"
lang: "zh"
category: "function"
name: "repeat"
signature: "repeat(object[, times])"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.repeat"
license: "PSF"
updated: "2026-10-01"
---

# repeat

Make an iterator that returns *object* over and over again. Runs indefinitely
unless the *times* argument is specified.

大致相当于::

   def repeat(object, times=None):
       # repeat(10, 3) → 10 10 10
       if times is None:
           while True:
               yield object
       else:
           for i in range(times):
               yield object

A common use for *repeat* is to supply a stream of constant values to *map*
or *zip*:

```python

>>> list(map(pow, range(10), repeat(2)))
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
