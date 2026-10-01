---
id: "python-zh-function-urllib-parse-unquote_plus"
language: "python"
lang: "zh"
category: "function"
name: "unquote_plus"
signature: "unquote_plus(string, encoding='utf-8', errors='replace')"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.parse.html#urllib.parse.unquote_plus"
license: "PSF"
updated: "2026-10-01"
---

# unquote_plus

Like `unquote`, but also replace plus signs with spaces, as required
for unquoting HTML form values.

*string* 必须为 :class:`str`。

例如: ``unquote_plus('/El+Ni%C3%B1o/')`` 将产生 ``'/El Niño/'``。
