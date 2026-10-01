---
id: "python-zh-function-pathlib-purepath-is_relative_to"
language: "python"
lang: "zh"
category: "function"
name: "PurePath.is_relative_to"
signature: "PurePath.is_relative_to(other)"
directive: "method"
module: "pathlib"
source_url: "https://docs.python.org/zh-cn/3/library/pathlib.html#pathlib.PurePath.is_relative_to"
license: "PSF"
updated: "2026-10-01"
---

# PurePath.is_relative_to

返回此路径是否相对于 *other* 的路径。

   >>> p = PurePath('/etc/passwd')
   >>> p.is_relative_to('/etc')
   True
   >>> p.is_relative_to('/usr')
   False

This method is string-based; it neither accesses the filesystem nor treats
"`..`" segments specially. The following code is equivalent:

   >>> u = PurePath('/usr')
   >>> u == p or u in p.parents
   False

> *Added in 3.9*

deprecated-removed:: 3.12 3.14
