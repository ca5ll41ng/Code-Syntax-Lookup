---
id: "python-zh-function-tomllib-loads"
language: "python"
lang: "zh"
category: "function"
name: "loads"
signature: "loads(s, /, *, parse_float=float)"
directive: "function"
module: "tomllib"
source_url: "https://docs.python.org/zh-cn/3/library/tomllib.html#tomllib.loads"
license: "PSF"
updated: "2026-10-01"
---

# loads

Load TOML from a `str` object. Return a `dict`. Convert TOML
types to Python using this `conversion table`. The
*parse_float* argument has the same meaning as in `load`.

对无效的 TOML 文档将引发 :exc:`TOMLDecodeError`。
