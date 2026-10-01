---
id: "python-zh-function-string-templatelib-convert"
language: "python"
lang: "zh"
category: "function"
name: "convert"
signature: "convert(obj, /, conversion)"
directive: "function"
module: "string.templatelib"
source_url: "https://docs.python.org/zh-cn/3/library/string.templatelib.html#string.templatelib.convert"
license: "PSF"
updated: "2026-10-01"
---

# convert

Applies formatted string literal `conversion`
semantics to the given object *obj*.
This is frequently useful for custom template string processing logic.

目前支持三种转换标志：

* `'s'` which calls `str` on the value (like `!s`),
* `'r'` which calls `repr` (like `!r`), and
* `'a'` which calls `ascii` (like `!a`).

如果转换标志为 ``None``，则 *obj* 不变返回。
