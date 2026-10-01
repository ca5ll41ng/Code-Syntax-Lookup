---
id: "python-en-function-asyncio-protocol-protocol-data_received"
language: "python"
lang: "en"
category: "function"
name: "Protocol.data_received"
signature: "Protocol.data_received(data)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.Protocol.data_received"
license: "PSF"
updated: "2026-10-01"
---

# Protocol.data_received

Called when some data is received.  *data* is a non-empty bytes
object containing the incoming data.

Whether the data is buffered, chunked or reassembled depends on
the transport.  In general, you shouldn't rely on specific semantics
and instead make your parsing generic and flexible. However,
data is always received in the correct order.

The method can be called an arbitrary number of times while
a connection is open.

However, `protocol.eof_received()`
is called at most once.  Once `eof_received()` is called,
`data_received()` is not called anymore.
