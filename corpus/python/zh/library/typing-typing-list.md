---
id: "python-zh-function-typing-list"
language: "python"
lang: "zh"
category: "function"
name: "List"
signature: "List(list, MutableSequence[T])"
directive: "class"
module: "typing"
source_url: "https://docs.python.org/zh-cn/3/library/typing.html#typing.List"
license: "PSF"
updated: "2026-10-01"
---

# List

:class:`list` 的已弃用的别名。

Note that to annotate arguments, it is preferred
to use an abstract collection type such as
`~collections.abc.Sequence` or `~collections.abc.Iterable`
rather than to use `list` or `typing.List`.

> *Deprecated since 3.9*: :class:`builtins.list <list>` now supports subscripting (``[]``). See :pep:`585` and :ref:`types-genericalias`.
