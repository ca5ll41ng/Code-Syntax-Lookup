---
id: "python-en-function-asyncio-protocol-subprocesstransport-close"
language: "python"
lang: "en"
category: "function"
name: "SubprocessTransport.close"
signature: "SubprocessTransport.close()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessTransport.close"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessTransport.close

Kill the subprocess by calling the `kill` method.

If the subprocess hasn't returned yet, and close transports of
*stdin*, *stdout*, and *stderr* pipes.
