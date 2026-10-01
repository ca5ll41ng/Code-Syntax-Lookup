---
id: "python-en-function-ipaddress-collapse_addresses"
language: "python"
lang: "en"
category: "function"
name: "collapse_addresses"
signature: "collapse_addresses(addresses)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.collapse_addresses"
license: "PSF"
updated: "2026-10-01"
---

# collapse_addresses

Return an iterator of the collapsed `IPv4Network` or
`IPv6Network` objects.  *addresses* is an `iterable` of
`IPv4Network` or `IPv6Network` objects.  A `TypeError` is
raised if *addresses* contains mixed version objects.

>>> [ipaddr for ipaddr in
... ipaddress.collapse_addresses([ipaddress.IPv4Network('192.0.2.0/25'),
... ipaddress.IPv4Network('192.0.2.128/25')])]
[IPv4Network('192.0.2.0/24')]
