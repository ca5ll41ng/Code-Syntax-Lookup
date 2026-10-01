---
id: "python-zh-function-codecs-getwriter"
language: "python"
lang: "zh"
category: "function"
name: "getwriter"
signature: "getwriter(encoding)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.getwriter"
license: "PSF"
updated: "2026-10-01"
---

# getwriter

Look up the codec for the given encoding and return its `StreamWriter`
class or factory function.

在编码无法找到时将引发 :exc:`LookupError`。
