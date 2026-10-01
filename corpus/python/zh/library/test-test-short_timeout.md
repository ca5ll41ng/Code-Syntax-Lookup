---
id: "python-zh-function-test-short_timeout"
language: "python"
lang: "zh"
category: "function"
name: "SHORT_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.SHORT_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# SHORT_TIMEOUT

如果测试耗时“太长”而要将测试标记为失败的以秒为单位的超时值。

该超时值取决于 regrtest ``--timeout`` 命令行选项。

If a test using `SHORT_TIMEOUT` starts to fail randomly on slow
buildbots, use `LONG_TIMEOUT` instead.

其默认值为 30 秒。
