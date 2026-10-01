---
id: "python-zh-function-importlib-resources-open_binary"
language: "python"
lang: "zh"
category: "function"
name: "open_binary"
signature: "open_binary(anchor, *path_names)"
directive: "function"
module: "importlib.resources"
source_url: "https://docs.python.org/zh-cn/3/library/importlib.resources.html#importlib.resources.open_binary"
license: "PSF"
updated: "2026-10-01"
---

# open_binary

打开指定的资源用于二进制读取。

See `the introduction` for
details on *anchor* and *path_names*.

This function returns a `~typing.BinaryIO` object,
that is, a binary stream open for reading.

此函数大致等价于::

    files(anchor).joinpath(*path_names).open('rb')

> *Changed in 3.13*: Multiple *path_names* are accepted.
