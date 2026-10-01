---
id: "python-zh-function-urllib-parse-unquote"
language: "python"
lang: "zh"
category: "function"
name: "unquote"
signature: "unquote(string, encoding='utf-8', errors='replace')"
directive: "function"
module: "urllib.parse"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.parse.html#urllib.parse.unquote"
license: "PSF"
updated: "2026-10-01"
---

# unquote

Replace `%{xx}` escapes with their single-character equivalent.
The optional *encoding* and *errors* parameters specify how to decode
percent-encoded sequences into Unicode characters, as accepted by the
`bytes.decode` method.

*string* 可以是 :class:`str` 或 :class:`bytes` 对象。

*encoding* defaults to `'utf-8'`.
*errors* defaults to `'replace'`, meaning invalid sequences are replaced
by a placeholder character.

例如: ``unquote('/El%20Ni%C3%B1o/')`` 将产生 ``'/El Niño/'``。

> *Changed in 3.9*: *string* parameter supports bytes and str objects (previously only str).
