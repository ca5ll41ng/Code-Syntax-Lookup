---
id: "python-en-function-asyncio-protocol-readtransport-resume_reading"
language: "python"
lang: "en"
category: "function"
name: "ReadTransport.resume_reading"
signature: "ReadTransport.resume_reading()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.ReadTransport.resume_reading"
license: "PSF"
updated: "2026-10-01"
---

# ReadTransport.resume_reading

Resume the receiving end.  The protocol's
`protocol.data_received()` method
will be called once again if some data is available for reading.

> *Changed in 3.7*: The method is idempotent, i.e. it can be called when the transport is already reading.
