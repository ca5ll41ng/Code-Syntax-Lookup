---
id: "python-zh-function-importlib-resources-read_binary"
language: "python"
lang: "zh"
category: "function"
name: "read_binary"
signature: "read_binary(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.resources.html#importlib.resources.read_binary"
license: "PSF"
updated: "2026-10-01"
---

# read_binary

以 :class:`bytes` 形式读取并返回指定资源的内容。

See `the introduction` for
details on *anchor* and *path_names*.

此函数大致等价于::

      files(anchor).joinpath(*path_names).read_bytes()

> *Changed in 3.13*: Multiple *path_names* are accepted.
