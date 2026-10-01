---
id: "python-zh-function-abc-update_abstractmethods"
language: "python"
lang: "zh"
category: "function"
name: "update_abstractmethods"
signature: "update_abstractmethods(cls)"
directive: "function"
module: "abc"
source_url: "https://docs.python.org/zh-cn/3/library/abc.html#abc.update_abstractmethods"
license: "PSF"
updated: "2026-10-01"
---

# update_abstractmethods

A function to recalculate an abstract class's abstraction status. This
function should be called if a class's abstract methods have been
implemented or changed after it was created. Usually, this function should
be called from within a class decorator.

返回 *cls*，使其能够用作类装饰器。

如果 *cls* 不是 :class:`ABCMeta` 的实例，则不做任何操作。

> **Note**
>
> This function assumes that *cls*'s superclasses are already updated.
> It does not update any subclasses.
>

> *Added in 3.10*
