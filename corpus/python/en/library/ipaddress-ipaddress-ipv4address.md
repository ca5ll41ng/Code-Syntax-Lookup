---
id: "python-en-function-ipaddress-ipv4address"
language: "python"
lang: "en"
category: "function"
name: "IPv4Address"
signature: "IPv4Address(address)"
directive: "class"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.IPv4Address"
license: "PSF"
updated: "2026-10-01"
---

# IPv4Address

Construct an IPv4 address.  An `AddressValueError` is raised if
*address* is not a valid IPv4 address.

The following constitutes a valid IPv4 address:

1. A string in decimal-dot notation, consisting of four decimal integers in
   the inclusive range 0--255, separated by dots (e.g. `192.168.0.1`). Each
   integer represents an octet (byte) in the address. Leading zeroes are
   not tolerated to prevent confusion with octal notation.
2. An integer that fits into 32 bits.
3. An integer packed into a `bytes` object of length 4 (most
   significant octet first).

>>> ipaddress.IPv4Address('192.168.0.1')
IPv4Address('192.168.0.1')
>>> ipaddress.IPv4Address(3232235521)
IPv4Address('192.168.0.1')
>>> ipaddress.IPv4Address(b'\xC0\xA8\x00\x01')
IPv4Address('192.168.0.1')

> *Changed in 3.8*: Leading zeros are tolerated, even in ambiguous cases that look like octal notation.

> *Changed in 3.9.5*: Leading zeros are no longer tolerated and are treated as an error. IPv4 address strings are now parsed as strict as glibc :func:`~socket.inet_pton`.

attribute:: version

attribute:: max_prefixlen

attribute:: compressed

attribute:: exploded

attribute:: packed

attribute:: reverse_pointer

attribute:: is_multicast

attribute:: is_private

attribute:: is_global

attribute:: is_unspecified

attribute:: is_reserved

attribute:: is_loopback

attribute:: is_link_local

attribute:: ipv6_mapped
