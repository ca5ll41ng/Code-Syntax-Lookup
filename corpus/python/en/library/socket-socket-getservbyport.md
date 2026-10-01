---
id: "python-en-function-socket-getservbyport"
language: "python"
lang: "en"
category: "function"
name: "getservbyport"
signature: "getservbyport(port[, protocolname])"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.getservbyport"
license: "PSF"
updated: "2026-10-01"
---

# getservbyport

Translate an internet port number and protocol name to a service name for that
service.  The optional protocol name, if given, should be `'tcp'` or
`'udp'`, otherwise any protocol will match.

audit-event:: socket.getservbyport port,protocolname socket.getservbyport

availability:: not WASI.
