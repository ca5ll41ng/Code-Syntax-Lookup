---
id: "python-zh-function-tarfile-tarinfo-frombuf"
language: "python"
lang: "zh"
category: "function"
name: "TarInfo.frombuf"
signature: "TarInfo.frombuf(buf, encoding, errors)"
directive: "classmethod"
module: "tarfile"
source_url: "https://docs.python.org/zh-cn/3/library/tarfile.html#tarfile.TarInfo.frombuf"
license: "PSF"
updated: "2026-10-01"
---

# TarInfo.frombuf

基于字符串缓冲区 *buf* 创建并返回一个 :class:`TarInfo` 对象。

如果缓冲区无效则会引发 :exc:`HeaderError`。
