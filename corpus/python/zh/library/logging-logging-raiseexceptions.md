---
id: "python-zh-function-logging-raiseexceptions"
language: "python"
lang: "zh"
category: "function"
name: "raiseExceptions"
directive: "data"
module: "logging"
source_url: "https://docs.python.org/zh-cn/3/library/logging.html#logging.raiseExceptions"
license: "PSF"
updated: "2026-10-01"
---

# raiseExceptions

用于查看在处理过程中异常是否应当被传播。

默认值: ``True``。

If `raiseExceptions` is `False`,
exceptions get silently ignored. This is what is mostly wanted
for a logging system - most users will not care about errors in
the logging system, they are more interested in application errors.
