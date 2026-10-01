---
id: "python-en-function-asyncio-protocol-writetransport"
language: "python"
lang: "en"
category: "function"
name: "WriteTransport"
signature: "WriteTransport(BaseTransport)"
directive: "class"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport

A base transport for write-only connections.

Instances of the *WriteTransport* class are returned from
the `loop.connect_write_pipe` event loop method and
are also used by subprocess-related methods like
`loop.subprocess_exec`.
