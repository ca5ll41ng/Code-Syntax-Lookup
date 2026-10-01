---
id: "python-zh-function-dis-get_instructions"
language: "python"
lang: "zh"
category: "function"
name: "get_instructions"
signature: "get_instructions(x, *, first_line=None, show_caches=False, adaptive=False, show_jit=False)"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/zh-cn/3/library/dis.html#dis.get_instructions"
license: "PSF"
updated: "2026-10-01"
---

# get_instructions

Return an iterator over the instructions in the supplied function, method,
source code string or code object.

The iterator generates a series of `Instruction` named tuples giving
the details of each operation in the supplied code.

If *first_line* is not `None`, it indicates the line number that should be
reported for the first source line in the disassembled code.  Otherwise, the
source line information (if any) is taken directly from the disassembled code
object.

参数 *adaptive* 和其在 :func:`dis` 中的工作方式一样。

The *show_jit* parameter works as it does in `dis`.

> *Added in 3.4*

> *Changed in 3.11*: Added the *show_caches* and *adaptive* parameters.

> *Changed in 3.13*: The *show_caches* parameter is deprecated and has no effect. The iterator generates the :class:`Instruction` instances with the *cache_info* field populated (regardless of the value of *show_caches*) and it no longer generates separate items for the cache entries.

> *Changed in next*: Added the *show_jit* parameter.
