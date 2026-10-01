---
id: "python-en-function-asyncio-protocol-writetransport-write_eof"
language: "python"
lang: "en"
category: "function"
name: "WriteTransport.write_eof"
signature: "WriteTransport.write_eof()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport.write_eof"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport.write_eof

Close the write end of the transport after flushing all buffered data.
Data may still be received.

This method can raise `NotImplementedError` if the transport
(e.g. SSL) doesn't support half-closed connections.
