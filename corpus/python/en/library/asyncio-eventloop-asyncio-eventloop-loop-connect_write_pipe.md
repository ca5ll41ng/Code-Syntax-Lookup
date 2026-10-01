---
id: "python-en-function-asyncio-eventloop-loop-connect_write_pipe"
language: "python"
lang: "en"
category: "function"
name: "loop.connect_write_pipe"
signature: "loop.connect_write_pipe(protocol_factory, pipe)"
directive: "method"
module: "asyncio-eventloop"
source_url: "https://docs.python.org/3/library/asyncio-eventloop.html#asyncio-eventloop.loop.connect_write_pipe"
license: "PSF"
updated: "2026-10-01"
---

# loop.connect_write_pipe

Register the write end of *pipe* in the event loop.

*protocol_factory* must be a callable returning an
`asyncio protocol` implementation.

*pipe* is a `file-like object`.  See
`Supported pipe objects` for the objects
supported as *pipe*.

Return pair `(transport, protocol)`, where *transport* supports
`WriteTransport` interface and *protocol* is an object
instantiated by the *protocol_factory*.

With `SelectorEventLoop` event loop, the *pipe* is set to
non-blocking mode.
