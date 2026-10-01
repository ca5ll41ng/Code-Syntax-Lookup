---
id: "python-en-function-ipaddress-summarize_address_range"
language: "python"
lang: "en"
category: "function"
name: "summarize_address_range"
signature: "summarize_address_range(first, last)"
directive: "function"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.summarize_address_range"
license: "PSF"
updated: "2026-10-01"
---

# summarize_address_range

Return an iterator of the summarized network range given the first and last
IP addresses.  *first* is the first `IPv4Address` or
`IPv6Address` in the range and *last* is the last `IPv4Address`
or `IPv6Address` in the range.  A `TypeError` is raised if
*first* or *last* are not IP addresses or are not of the same version.  A
`ValueError` is raised if *last* is not greater than *first* or if
*first* address version is not 4 or 6.

>>> [ipaddr for ipaddr in ipaddress.summarize_address_range(
...    ipaddress.IPv4Address('192.0.2.0'),
...    ipaddress.IPv4Address('192.0.2.130'))]
[IPv4Network('192.0.2.0/25'), IPv4Network('192.0.2.128/31'), IPv4Network('192.0.2.130/32')]
