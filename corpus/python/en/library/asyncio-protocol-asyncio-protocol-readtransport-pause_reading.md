---
id: "python-en-function-asyncio-protocol-readtransport-pause_reading"
language: "python"
lang: "en"
category: "function"
name: "ReadTransport.pause_reading"
signature: "ReadTransport.pause_reading()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.ReadTransport.pause_reading"
license: "PSF"
updated: "2026-10-01"
---

# ReadTransport.pause_reading

Pause the receiving end of the transport.  No data will be passed to
the protocol's `protocol.data_received()`
method until `resume_reading` is called.

> *Changed in 3.7*: The method is idempotent, i.e. it can be called when the transport is already paused or closed.
