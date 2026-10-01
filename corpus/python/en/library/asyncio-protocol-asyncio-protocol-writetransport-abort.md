---
id: "python-en-function-asyncio-protocol-writetransport-abort"
language: "python"
lang: "en"
category: "function"
name: "WriteTransport.abort"
signature: "WriteTransport.abort()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport.abort"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport.abort

Close the transport immediately, without waiting for pending operations
to complete.  Buffered data will be lost.  No more data will be received.
The protocol's `protocol.connection_lost()` method will eventually be
called with `None` as its argument.
