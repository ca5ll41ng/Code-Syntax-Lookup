---
id: "python-en-function-asyncio-protocol-protocol-eof_received"
language: "python"
lang: "en"
category: "function"
name: "Protocol.eof_received"
signature: "Protocol.eof_received()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.Protocol.eof_received"
license: "PSF"
updated: "2026-10-01"
---

# Protocol.eof_received

Called when the other end signals it won't send any more data
(for example by calling `transport.write_eof()`, if the other end also uses
asyncio).

This method may return a false value (including `None`), in which case
the transport will close itself.  Conversely, if this method returns a
true value, the protocol used determines whether to close the transport.
Since the default implementation returns `None`, it implicitly closes the
connection.

Some transports, including SSL, don't support half-closed connections,
in which case returning true from this method will result in the connection
being closed.
