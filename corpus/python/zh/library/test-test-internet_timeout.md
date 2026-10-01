---
id: "python-zh-function-test-internet_timeout"
language: "python"
lang: "zh"
category: "function"
name: "INTERNET_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.INTERNET_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# INTERNET_TIMEOUT

发往互联网的网络请求的以秒为单位的超时值。

The timeout is short enough to prevent a test to wait for too long if the
internet request is blocked for whatever reason.

Usually, a timeout using `INTERNET_TIMEOUT` should not mark a test as
failed, but skip the test instead: see
`~test.support.socket_helper.transient_internet`.

其默认值是 1 分钟。

参见 :data:`LOOPBACK_TIMEOUT`。
