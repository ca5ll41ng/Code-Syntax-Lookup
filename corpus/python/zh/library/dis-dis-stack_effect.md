---
id: "python-zh-function-dis-stack_effect"
language: "python"
lang: "zh"
category: "function"
name: "stack_effect"
signature: "stack_effect(opcode, oparg=None, *, jump=None)"
directive: "function"
module: "dis"
source_url: "https://docs.python.org/zh-cn/3/library/dis.html#dis.stack_effect"
license: "PSF"
updated: "2026-10-01"
---

# stack_effect

使用参数 *oparg* 计算 *opcode* 的堆栈效果。

If the code has a jump target and *jump* is `True`, `~stack_effect`
will return the stack effect of jumping.  If *jump* is `False`,
it will return the stack effect of not jumping. And if *jump* is
`None` (default), it will return the maximal stack effect of both cases.

> *Added in 3.4*

> *Changed in 3.8*: Added *jump* parameter.

> *Changed in 3.13*: If ``oparg`` is omitted (or ``None``), the stack effect is now returned for ``oparg=0``. Previously this was an error for opcodes that use their arg. It is also no longer an error to pass an integer ``oparg`` when the ``opcode`` does not use it; the ``oparg`` in this case is ignored.
