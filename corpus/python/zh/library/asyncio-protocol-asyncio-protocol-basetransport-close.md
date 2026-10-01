---
id: "python-zh-function-asyncio-protocol-basetransport-close"
language: "python"
lang: "zh"
category: "function"
name: "BaseTransport.close"
signature: "BaseTransport.close()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.BaseTransport.close"
license: "PSF"
updated: "2026-10-01"
---

# BaseTransport.close

关闭传输。

If the transport has a buffer for outgoing
data, buffered data will be flushed asynchronously.  No more data
will be received.  After all buffered data is flushed, the
protocol's `protocol.connection_lost()` method will be called with
`None` as its argument. The transport should not be
used once it is closed.
