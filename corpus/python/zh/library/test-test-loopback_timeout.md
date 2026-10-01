---
id: "python-zh-function-test-loopback_timeout"
language: "python"
lang: "zh"
category: "function"
name: "LOOPBACK_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/zh-cn/3/library/test.html#test.LOOPBACK_TIMEOUT"
license: "PSF"
updated: "2026-10-01"
---

# LOOPBACK_TIMEOUT

Timeout in seconds for tests using a network server listening on the network
local loopback interface like `127.0.0.1`.

The timeout is long enough to prevent test failure: it takes into account
that the client and the server can run in different threads or even
different processes.

The timeout should be long enough for `~socket.socket.connect`,
`~socket.socket.recv` and `~socket.socket.send` methods of
`socket.socket`.

其默认值为 10 秒。

参见 :data:`INTERNET_TIMEOUT`。
