---
id: "python-zh-function-asyncio-protocol-writetransport"
language: "python"
lang: "zh"
category: "function"
name: "WriteTransport"
signature: "WriteTransport(BaseTransport)"
directive: "class"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport

只写连接的基础传输。

Instances of the *WriteTransport* class are returned from
the `loop.connect_write_pipe` event loop method and
are also used by subprocess-related methods like
`loop.subprocess_exec`.
