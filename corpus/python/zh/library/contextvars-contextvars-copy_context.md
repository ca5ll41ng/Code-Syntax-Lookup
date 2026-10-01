---
id: "python-zh-function-contextvars-copy_context"
language: "python"
lang: "zh"
category: "function"
name: "copy_context"
signature: "copy_context()"
directive: "function"
module: "contextvars"
source_url: "https://docs.python.org/zh-cn/3/library/contextvars.html#contextvars.copy_context"
license: "PSF"
updated: "2026-10-01"
---

# copy_context

返回当前 :class:`~contextvars.Context` 对象的拷贝。

The following snippet gets a copy of the current context and prints
all variables and their values that are set in it::

   ctx: Context = copy_context()
   print(list(ctx.items()))

The function has an *O*\ (1) complexity, i.e. works equally fast for
contexts with a few context variables and for contexts that have
a lot of them.
