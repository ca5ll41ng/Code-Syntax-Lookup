---
id: "python-en-function-asyncio-protocol-datagramprotocol-error_received"
language: "python"
lang: "en"
category: "function"
name: "DatagramProtocol.error_received"
signature: "DatagramProtocol.error_received(exc)"
directive: "method"
module: "asyncio-protocol"
source_url: "https://docs.python.org/3/library/asyncio-protocol.html#asyncio-protocol.DatagramProtocol.error_received"
license: "PSF"
updated: "2026-10-01"
---

# DatagramProtocol.error_received

Called when a previous send or receive operation raises an
`OSError`.  *exc* is the `OSError` instance.

This method is called in rare conditions, when the transport (e.g. UDP)
detects that a datagram could not be delivered to its recipient.
In many conditions though, undeliverable datagrams will be silently
dropped.
