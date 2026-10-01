---
id: "python-en-function-asyncio-protocol-writetransport-set_write_buffer_limits"
language: "python"
lang: "en"
category: "function"
name: "WriteTransport.set_write_buffer_limits"
signature: "WriteTransport.set_write_buffer_limits(high=None, low=None)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.WriteTransport.set_write_buffer_limits"
license: "PSF"
updated: "2026-10-01"
---

# WriteTransport.set_write_buffer_limits

Set the *high* and *low* watermarks for write flow control.

These two values (measured in number of
bytes) control when the protocol's
`protocol.pause_writing()`
and `protocol.resume_writing()`
methods are called. If specified, the low watermark must be less
than or equal to the high watermark.  Neither *high* nor *low*
can be negative.

`~BaseProtocol.pause_writing` is called when the buffer size
becomes greater than or equal to the *high* value. If writing has
been paused, `~BaseProtocol.resume_writing` is called when
the buffer size becomes less than or equal to the *low* value.

The defaults are implementation-specific.  If only the
high watermark is given, the low watermark defaults to an
implementation-specific value less than or equal to the
high watermark.  Setting *high* to zero forces *low* to zero as
well, and causes `~BaseProtocol.pause_writing` to be called
whenever the buffer becomes non-empty.  Setting *low* to zero causes
`~BaseProtocol.resume_writing` to be called only once the
buffer is empty. Use of zero for either limit is generally
sub-optimal as it reduces opportunities for doing I/O and
computation concurrently.

Use `~WriteTransport.get_write_buffer_limits`
to get the limits.
