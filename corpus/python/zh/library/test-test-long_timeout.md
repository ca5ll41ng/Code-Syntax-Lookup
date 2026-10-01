---
id: "python-zh-function-test-long_timeout"
language: "python"
lang: "zh"
category: "function"
name: "LONG_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.LONG_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# LONG_TIMEOUT

用于检测测试何时挂起的以秒为单位的超时值。

It is long enough to reduce the risk of test failure on the slowest Python
buildbots. It should not be used to mark a test as failed if the test takes
"too long".  The timeout value depends on the regrtest `--timeout` command
line option.

其默认值为 5 分钟。

See also `LOOPBACK_TIMEOUT`, `INTERNET_TIMEOUT` and
`SHORT_TIMEOUT`.
