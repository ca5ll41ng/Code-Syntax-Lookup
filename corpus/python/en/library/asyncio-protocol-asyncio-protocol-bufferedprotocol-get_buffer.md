---
id: "python-en-function-asyncio-protocol-bufferedprotocol-get_buffer"
language: "python"
lang: "en"
category: "function"
name: "BufferedProtocol.get_buffer"
signature: "BufferedProtocol.get_buffer(sizehint)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.BufferedProtocol.get_buffer"
license: "PSF"
updated: "2026-10-01"
---

# BufferedProtocol.get_buffer

Called to allocate a new receive buffer.

*sizehint* is the recommended minimum size for the returned
buffer.  It is acceptable to return smaller or larger buffers
than what *sizehint* suggests.  When set to -1, the buffer size
can be arbitrary. It is an error to return a buffer with a zero size.

`get_buffer()` must return an object implementing the
`buffer protocol`.
