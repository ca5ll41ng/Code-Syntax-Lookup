---
id: "python-en-function-asyncio-protocol-writetransport-get_write_buffer_limits"
language: "python"
lang: "en"
category: "function"
name: "WriteTransport.get_write_buffer_limits"
signature: "WriteTransport.get_write_buffer_limits()"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport.get_write_buffer_limits"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport.get_write_buffer_limits

Get the *high* and *low* watermarks for write flow control. Return a
tuple `(low, high)` where *low* and *high* are positive number of
bytes.

Use `set_write_buffer_limits` to set the limits.

> *Added in 3.4.2*
