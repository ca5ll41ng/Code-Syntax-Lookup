---
id: "python-en-function-ipaddress-ipv6address"
language: "python"
lang: "en"
category: "function"
name: "IPv6Address"
signature: "IPv6Address(address)"
directive: "class"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.IPv6Address"
license: "PSF"
updated: "2026-10-01"
---

# IPv6Address

Construct an IPv6 address.  An `AddressValueError` is raised if
*address* is not a valid IPv6 address.

The following constitutes a valid IPv6 address:

1. A string consisting of eight groups of four hexadecimal digits, each
   group representing 16 bits.  The groups are separated by colons.
   This describes an *exploded* (longhand) notation.  The string can
   also be *compressed* (shorthand notation) by various means.  See
   `4291` for details.  For example,
   `"0000:0000:0000:0000:0000:0abc:0007:0def"` can be compressed to
   `"::abc:7:def"`.

   Optionally, the string may also have a scope zone ID, expressed
   with a suffix `%scope_id`. If present, the scope ID must be non-empty,
   and may not contain `%`.
   See `4007` for details.
   For example, `fe80::1234%1` might identify address `fe80::1234` on the first link of the node.
2. An integer that fits into 128 bits.
3. An integer packed into a `bytes` object of length 16, big-endian.

>>> ipaddress.IPv6Address('2001:db8::1000')
IPv6Address('2001:db8::1000')
>>> ipaddress.IPv6Address('ff02::5678%1')
IPv6Address('ff02::5678%1')

attribute:: compressed

The short form of the address representation, with leading zeroes in
groups omitted and the longest sequence of groups consisting entirely of
zeroes collapsed to a single empty group.

This is also the value returned by `str(addr)` for IPv6 addresses.

attribute:: exploded

The long form of the address representation, with all leading zeroes and
groups consisting entirely of zeroes included.

For the following attributes and methods, see the corresponding
documentation of the `IPv4Address` class:

attribute:: packed

attribute:: reverse_pointer

attribute:: version

attribute:: max_prefixlen

attribute:: is_multicast

attribute:: is_private

attribute:: is_global

attribute:: is_unspecified

attribute:: is_reserved

attribute:: is_loopback

attribute:: is_link_local

attribute:: is_site_local

attribute:: ipv4_mapped

attribute:: scope_id

attribute:: sixtofour

attribute:: teredo
