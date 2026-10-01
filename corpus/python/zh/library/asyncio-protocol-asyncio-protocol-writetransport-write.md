---
id: "python-zh-function-asyncio-protocol-writetransport-write"
language: "python"
lang: "zh"
category: "function"
name: "WriteTransport.write"
signature: "WriteTransport.write(data)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport.write"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport.write

将一些 *data* 字节串写入传输。

This method does not block; it buffers the data and arranges for it
to be sent out asynchronously.
