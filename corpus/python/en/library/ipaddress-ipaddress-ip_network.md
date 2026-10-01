---
id: "python-en-function-ipaddress-ip_network"
language: "python"
lang: "en"
category: "function"
name: "ip_network"
signature: "ip_network(address, strict=True)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.ip_network"
license: "PSF"
updated: "2026-10-01"
---

# ip_network

Return an `IPv4Network` or `IPv6Network` object depending on
the IP address passed as argument.  *address* is a string or integer
representing the IP network.  Either IPv4 or IPv6 networks may be supplied;
integers less than `2**32` will be considered to be IPv4 by default.  *strict*
is passed to `IPv4Network` or `IPv6Network` constructor.  A
`ValueError` is raised if *address* does not represent a valid IPv4 or
IPv6 address, or if the network has host bits set.

>>> ipaddress.ip_network('192.168.0.0/28')
IPv4Network('192.168.0.0/28')
