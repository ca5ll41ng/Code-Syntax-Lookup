---
id: "python-zh-function-asyncio-protocol-subprocesstransport-close"
language: "python"
lang: "zh"
category: "function"
name: "SubprocessTransport.close"
signature: "SubprocessTransport.close()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.SubprocessTransport.close"
license: "PSF"
updated: "2026-10-01"
---

# SubprocessTransport.close

通过调用 :meth:`kill` 方法来杀死子进程。

If the subprocess hasn't returned yet, and close transports of
*stdin*, *stdout*, and *stderr* pipes.
