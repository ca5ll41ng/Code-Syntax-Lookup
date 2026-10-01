---
id: "python-en-function-asyncio-protocol-writetransport-writelines"
language: "python"
lang: "en"
category: "function"
name: "WriteTransport.writelines"
signature: "WriteTransport.writelines(list_of_data)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport.writelines"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport.writelines

Write a list (or any iterable) of data bytes to the transport.
This is functionally equivalent to calling `write` on each
element yielded by the iterable, but may be implemented more
efficiently.
