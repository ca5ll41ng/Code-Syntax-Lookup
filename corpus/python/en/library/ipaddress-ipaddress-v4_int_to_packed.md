---
id: "python-en-function-ipaddress-v4_int_to_packed"
language: "python"
lang: "en"
category: "function"
name: "v4_int_to_packed"
signature: "v4_int_to_packed(address)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.v4_int_to_packed"
license: "PSF"
updated: "2026-10-01"
---

# v4_int_to_packed

Represent an address as 4 packed bytes in network (big-endian) order.
*address* is an integer representation of an IPv4 IP address.  A
`ValueError` is raised if the integer is negative or too large to be an
IPv4 IP address.

>>> ipaddress.ip_address(3221225985)
IPv4Address('192.0.2.1')
>>> ipaddress.v4_int_to_packed(3221225985)
b'\xc0\x00\x02\x01'
