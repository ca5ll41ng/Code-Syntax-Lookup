---
id: "python-en-function-ipaddress-ip_interface"
language: "python"
lang: "en"
category: "function"
name: "ip_interface"
signature: "ip_interface(address)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.ip_interface"
license: "PSF"
updated: "2026-10-01"
---

# ip_interface

Return an `IPv4Interface` or `IPv6Interface` object depending
on the IP address passed as argument.  *address* is a string or integer
representing the IP address.  Either IPv4 or IPv6 addresses may be supplied;
integers less than `2**32` will be considered to be IPv4 by default.  A
`ValueError` is raised if *address* does not represent a valid IPv4 or
IPv6 address.
