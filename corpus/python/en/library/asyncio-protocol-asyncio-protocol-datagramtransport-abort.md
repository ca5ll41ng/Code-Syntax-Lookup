---
id: "python-en-function-asyncio-protocol-datagramtransport-abort"
language: "python"
lang: "en"
category: "function"
name: "DatagramTransport.abort"
signature: "DatagramTransport.abort()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.DatagramTransport.abort"
license: "PSF"
updated: "2026-10-01"
---

# DatagramTransport.abort

Close the transport immediately, without waiting for pending
operations to complete.  Buffered data will be lost.
No more data will be received.  The protocol's
`protocol.connection_lost()`
method will eventually be called with `None` as its argument.
