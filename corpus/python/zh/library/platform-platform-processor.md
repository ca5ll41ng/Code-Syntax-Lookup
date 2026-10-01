---
id: "python-zh-function-platform-processor"
language: "python"
lang: "zh"
category: "function"
name: "processor"
signature: "processor()"
directive: "function"
module: "platform"
source_url: "https://docs.python.org/zh-cn/3/library/platform.html#platform.processor"
license: "PSF"
updated: "2026-10-01"
---

# processor

返回（真实的）处理器名称，例如 ``'amdk6'``。

An empty string is returned if the value cannot be determined. Note that many
platforms do not provide this information or simply return the same value as for
`machine`.  NetBSD does this.
