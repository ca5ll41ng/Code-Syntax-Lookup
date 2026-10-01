---
id: "python-en-function-asyncio-protocol-basetransport-close"
language: "python"
lang: "en"
category: "function"
name: "BaseTransport.close"
signature: "BaseTransport.close()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.BaseTransport.close"
license: "PSF"
updated: "2026-10-01"
---

# BaseTransport.close

Close the transport.

If the transport has a buffer for outgoing
data, buffered data will be flushed asynchronously.  No more data
will be received.  After all buffered data is flushed, the
protocol's `protocol.connection_lost()` method will be called with
`None` as its argument. The transport should not be
used once it is closed.
