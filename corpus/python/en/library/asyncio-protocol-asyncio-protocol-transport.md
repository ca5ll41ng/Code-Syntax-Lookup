---
id: "python-en-function-asyncio-protocol-transport"
language: "python"
lang: "en"
category: "function"
name: "Transport"
signature: "Transport(WriteTransport, ReadTransport)"
directive: "class"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.Transport"
license: "PSF"
updated: "2026-10-01"
---

# Transport

Interface representing a bidirectional transport, such as a
TCP connection.

The user does not instantiate a transport directly; they call a
utility function, passing it a protocol factory and other
information necessary to create the transport and protocol.

Instances of the *Transport* class are returned from or used by
event loop methods like `loop.create_connection`,
`loop.create_unix_connection`,
`loop.create_server`, `loop.sendfile`, etc.
