---
id: "python-zh-function-tomllib-load"
language: "python"
lang: "zh"
category: "function"
name: "load"
signature: "load(fp, /, *, parse_float=float)"
directive: "function"
module: "tomllib"
source_url: "https://docs.python.org/zh-cn/3/library/tomllib.html#tomllib.load"
license: "PSF"
updated: "2026-10-01"
---

# load

Read a TOML file. The first argument should be a readable and binary file object.
Return a `dict`. Convert TOML types to Python using this
`conversion table`.

*parse_float* will be called with the string of every TOML
float to be decoded.  By default, this is equivalent to `float(num_str)`.
This can be used to use another datatype or parser for TOML floats
(e.g. `decimal.Decimal`). The callable must not return a
`dict` or a `list`, else a `ValueError` is raised.

对无效的 TOML 文档将引发 :exc:`TOMLDecodeError`。
