---
id: "python-zh-function-codecs-getreader"
language: "python"
lang: "zh"
category: "function"
name: "getreader"
signature: "getreader(encoding)"
directive: "function"
module: "codecs"
source_url: "https://docs.python.org/zh-cn/3/library/codecs.html#codecs.getreader"
license: "PSF"
updated: "2026-10-01"
---

# getreader

Look up the codec for the given encoding and return its `StreamReader`
class or factory function.

在编码无法找到时将引发 :exc:`LookupError`。
