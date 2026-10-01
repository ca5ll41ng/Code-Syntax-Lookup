---
id: "python-en-function-socket-inet_ntop"
language: "python"
lang: "en"
category: "function"
name: "inet_ntop"
signature: "inet_ntop(address_family, packed_ip)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.inet_ntop"
license: "PSF"
updated: "2026-10-01"
---

# inet_ntop

Convert a packed IP address (a `bytes-like object` of some number of
bytes) to its standard, family-specific string representation (for
example, `'7.10.0.5'` or `'5aef:2b::8'`).
`inet_ntop` is useful when a library or network protocol returns an
object of type :c`in_addr` (similar to `inet_ntoa`) or
:c`in6_addr`.

Supported values for *address_family* are currently `AF_INET` and
`AF_INET6`. If the bytes object *packed_ip* is not the correct
length for the specified address family, `ValueError` will be raised.
`OSError` is raised for errors from the call to `inet_ntop`.

availability:: Unix, Windows.

> *Changed in 3.4*: Windows support added

> *Changed in 3.5*: Writable :term:`bytes-like object` is now accepted.
