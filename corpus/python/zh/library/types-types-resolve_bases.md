---
id: "python-zh-function-types-resolve_bases"
language: "python"
lang: "zh"
category: "function"
name: "resolve_bases"
signature: "resolve_bases(bases)"
directive: "function"
module: "types"
source_url: "https://docs.python.org/zh-cn/3/library/types.html#types.resolve_bases"
license: "PSF"
updated: "2026-10-01"
---

# resolve_bases

动态地解析 MRO 条目，具体描述见 :pep:`560`。

This function looks for items in *bases* that are not instances of
`type`, and returns a tuple where each such object that has
an `~object.__mro_entries__` method is replaced with an unpacked result of
calling this method.  If a *bases* item is an instance of `type`,
or it doesn't have an `__mro_entries__` method, then it is included in
the return tuple unchanged.

> *Added in 3.7*
