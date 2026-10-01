---
id: "python-en-function-test-loopback_timeout"
language: "python"
lang: "en"
category: "function"
name: "LOOPBACK_TIMEOUT"
directive: "data"
module: "test"
source_url: "https://docs.python.org/3/library/test.html#test.LOOPBACK_TIMEOUT"
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

Its default value is 10 seconds.

See also `INTERNET_TIMEOUT`.
