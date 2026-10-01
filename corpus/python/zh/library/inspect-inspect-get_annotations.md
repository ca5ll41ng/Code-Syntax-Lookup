---
id: "python-zh-function-inspect-get_annotations"
language: "python"
lang: "zh"
category: "function"
name: "get_annotations"
signature: "get_annotations(obj, *, globals=None, locals=None, eval_str=False, format=annotationlib.Format.VALUE)"
directive: "function"
module: "inspect"
source_url: "https://docs.python.org/zh-cn/3/library/inspect.html#inspect.get_annotations"
license: "PSF"
updated: "2026-10-01"
---

# get_annotations

计算一个对象的标注字典。

This is an alias for `annotationlib.get_annotations`; see the documentation
of that function for more information.

> **Caution**
>
> This function may execute arbitrary code contained in annotations.
> See `annotationlib-security` for more information.
>

> *Added in 3.10*

> *Changed in 3.14*: This function is now an alias for :func:`annotationlib.get_annotations`. Calling it as ``inspect.get_annotations`` will continue to work.
