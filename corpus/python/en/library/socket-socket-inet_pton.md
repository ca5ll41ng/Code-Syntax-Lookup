---
id: "python-en-function-socket-inet_pton"
language: "python"
lang: "en"
category: "function"
name: "inet_pton"
signature: "inet_pton(address_family, ip_string)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.inet_pton"
license: "PSF"
updated: "2026-10-01"
---

# inet_pton

Convert an IP address from its family-specific string format to a packed,
binary format. `inet_pton` is useful when a library or network protocol
calls for an object of type :c`in_addr` (similar to
`inet_aton`) or :c`in6_addr`.

Supported values for *address_family* are currently `AF_INET` and
`AF_INET6`. If the IP address string *ip_string* is invalid,
`OSError` will be raised. Note that exactly what is valid depends on
both the value of *address_family* and the underlying implementation of
:c`inet_pton`.

availability:: Unix, Windows.

> *Changed in 3.4*: Windows support added
