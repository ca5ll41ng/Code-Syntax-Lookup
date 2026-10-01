---
id: "python-en-function-asyncio-protocol-baseprotocol-connection_lost"
language: "python"
lang: "en"
category: "function"
name: "BaseProtocol.connection_lost"
signature: "BaseProtocol.connection_lost(exc)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.BaseProtocol.connection_lost"
license: "PSF"
updated: "2026-10-01"
---

# BaseProtocol.connection_lost

Called when the connection is lost or closed.

The argument is either an exception object or `None`.
The latter means a regular EOF is received, or the connection was
aborted or closed by this side of the connection.
