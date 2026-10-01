---
id: "python-en-function-asyncio-protocol-datagramtransport-sendto"
language: "python"
lang: "en"
category: "function"
name: "DatagramTransport.sendto"
signature: "DatagramTransport.sendto(data, addr=None)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.DatagramTransport.sendto"
license: "PSF"
updated: "2026-10-01"
---

# DatagramTransport.sendto

Send the *data* bytes to the remote peer given by *addr* (a
transport-dependent target address).  If *addr* is `None`,
the data is sent to the target address given on transport
creation.

This method does not block; it buffers the data and arranges
for it to be sent out asynchronously.

> *Changed in 3.13*: This method can be called with an empty bytes object to send a zero-length datagram. The buffer size calculation used for flow control is also updated to account for the datagram header.
