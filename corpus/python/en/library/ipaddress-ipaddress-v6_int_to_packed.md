---
id: "python-en-function-ipaddress-v6_int_to_packed"
language: "python"
lang: "en"
category: "function"
name: "v6_int_to_packed"
signature: "v6_int_to_packed(address)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.v6_int_to_packed"
license: "PSF"
updated: "2026-10-01"
---

# v6_int_to_packed

Represent an address as 16 packed bytes in network (big-endian) order.
*address* is an integer representation of an IPv6 IP address.  A
`ValueError` is raised if the integer is negative or too large to be an
IPv6 IP address.
