---
id: "python-en-function-socket-gethostbyname"
language: "python"
lang: "en"
category: "function"
name: "gethostbyname"
signature: "gethostbyname(hostname)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.gethostbyname"
license: "PSF"
updated: "2026-10-01"
---

# gethostbyname

Translate a host name to IPv4 address format.  The IPv4 address is returned as a
string, such as  `'100.50.200.5'`.  If the host name is an IPv4 address itself
it is returned unchanged.  See `gethostbyname_ex` for a more complete
interface. `gethostbyname` does not support IPv6 name resolution, and
`getaddrinfo` should be used instead for IPv4/v6 dual stack support.

audit-event:: socket.gethostbyname hostname socket.gethostbyname

availability:: not WASI.
