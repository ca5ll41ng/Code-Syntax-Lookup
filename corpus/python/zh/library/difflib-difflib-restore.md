---
id: "python-zh-function-difflib-restore"
language: "python"
lang: "zh"
category: "function"
name: "restore"
signature: "restore(sequence, which)"
directive: "function"
module: "difflib"
source_url: "https://docs.python.org/zh-cn/3/library/difflib.html#difflib.restore"
license: "PSF"
updated: "2026-10-01"
---

# restore

返回两个序列中产生增量的那一个。

Given a *sequence* produced by `Differ.compare` or `ndiff`, extract
lines originating from file 1 or 2 (parameter *which*), stripping off line
prefixes.

示例：

   >>> diff = ndiff('one\ntwo\nthree\n'.splitlines(keepends=True),
   ...              'ore\ntree\nemu\n'.splitlines(keepends=True))
   >>> diff = list(diff) # materialize the generated delta into a list
   >>> print(''.join(restore(diff, 1)), end="")
   one
   two
   three
   >>> print(''.join(restore(diff, 2)), end="")
   ore
   tree
   emu
