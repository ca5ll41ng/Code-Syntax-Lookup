---
id: "python-zh-function-asyncio-protocol-readtransport"
language: "python"
lang: "zh"
category: "function"
name: "ReadTransport"
signature: "ReadTransport(BaseTransport)"
directive: "class"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.ReadTransport"
license: "PSF"
updated: "2026-10-01"
---

# ReadTransport

只读连接的基础传输。

Instances of the *ReadTransport* class are returned from
the `loop.connect_read_pipe` event loop method and
are also used by subprocess-related methods like
`loop.subprocess_exec`.
