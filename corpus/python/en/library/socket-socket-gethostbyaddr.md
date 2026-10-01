---
id: "python-en-function-socket-gethostbyaddr"
language: "python"
lang: "en"
category: "function"
name: "gethostbyaddr"
signature: "gethostbyaddr(ip_address)"
directive: "function"
module: "socket"
source_url: "https://docs.python.org/3/library/socket.html#socket.gethostbyaddr"
license: "PSF"
updated: "2026-10-01"
---

# gethostbyaddr

Return a 3-tuple `(hostname, aliaslist, ipaddrlist)` where *hostname* is the
primary host name responding to the given *ip_address*, *aliaslist* is a
(possibly empty) list of alternative host names for the same address, and
*ipaddrlist* is a list of IPv4/v6 addresses for the same interface on the same
host (most likely containing only a single address). To find the fully qualified
domain name, use the function `getfqdn`. `gethostbyaddr` supports
both IPv4 and IPv6.

audit-event:: socket.gethostbyaddr ip_address socket.gethostbyaddr

availability:: not WASI.
