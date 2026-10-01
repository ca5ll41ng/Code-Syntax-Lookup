---
id: "python-zh-function-itertools-pairwise"
language: "python"
lang: "zh"
category: "function"
name: "pairwise"
signature: "pairwise(iterable)"
directive: "function"
module: "itertools"
source_url: "https://docs.python.org/zh-cn/3/library/itertools.html#itertools.pairwise"
license: "PSF"
updated: "2026-10-01"
---

# pairwise

返回从输入 *iterable* 中获取的连续重叠对。

The number of 2-tuples in the output iterator will be one fewer than the
number of inputs.  It will be empty if the input iterable has fewer than
two values.

大致相当于::

     def pairwise(iterable):
         # pairwise('ABCDEFG') → AB BC CD DE EF FG

         iterator = iter(iterable)
         a = next(iterator, None)

         for b in iterator:
             yield a, b
             a = b

> *Added in 3.10*
