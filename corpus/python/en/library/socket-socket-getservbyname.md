---
id: "python-en-function-socket-getservbyname"
language: "python"
lang: "en"
category: "function"
name: "getservbyname"
signature: "getservbyname(servicename[, protocolname])"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.getservbyname"
license: "PSF"
updated: "2026-10-01"
---

# getservbyname

Translate an internet service name and protocol name to a port number for that
service.  The optional protocol name, if given, should be `'tcp'` or
`'udp'`, otherwise any protocol will match.

audit-event:: socket.getservbyname servicename,protocolname socket.getservbyname

availability:: not WASI.
