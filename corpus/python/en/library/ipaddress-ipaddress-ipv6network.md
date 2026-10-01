---
id: "python-en-function-ipaddress-ipv6network"
language: "python"
lang: "en"
category: "function"
name: "IPv6Network"
signature: "IPv6Network(address, strict=True)"
directive: "class"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.IPv6Network"
license: "PSF"
updated: "2026-10-01"
---

# IPv6Network

Construct an IPv6 network definition.  *address* can be one of the following:

1. A string consisting of an IP address and an optional prefix length,
   separated by a slash (`/`).  The IP address is the network address,
   and the prefix length must be a single number, the *prefix*.  If no
   prefix length is provided, it's considered to be `/128`.

   Note that currently expanded netmasks are not supported.  That means
   `2001:db00::0/24` is a valid argument while `2001:db00::0/ffff:ff00::`
   is not.

2. An integer that fits into 128 bits.  This is equivalent to a
   single-address network, with the network address being *address* and
   the mask being `/128`.

3. An integer packed into a `bytes` object of length 16, big-endian.
   The interpretation is similar to an integer *address*.

4. A two-tuple of an address description and a netmask, where the address
   description is either a string, a 128-bit integer, a 16-byte packed
   integer, or an existing `IPv6Address` object; and the netmask is
   an integer representing the prefix length.

An `AddressValueError` is raised if *address* is not a valid IPv6
address.  A `NetmaskValueError` is raised if the mask is not valid for
an IPv6 address.

If *strict* is `True` and host bits are set in the supplied address,
then `ValueError` is raised.  Otherwise, the host bits are masked out
to determine the appropriate network address.

> *Changed in 3.5*: Added the two-tuple form for the *address* constructor parameter.

attribute:: version

attribute:: max_prefixlen

attribute:: is_multicast

attribute:: is_private

attribute:: is_unspecified

attribute:: is_reserved

attribute:: is_loopback

attribute:: is_link_local

attribute:: network_address

attribute:: broadcast_address

attribute:: hostmask

attribute:: netmask

attribute:: with_prefixlen

attribute:: compressed

attribute:: exploded

attribute:: with_netmask

attribute:: with_hostmask

attribute:: num_addresses

attribute:: prefixlen

method:: hosts()

method:: overlaps(other)

method:: address_exclude(network)

method:: subnets(prefixlen_diff=1, new_prefix=None)

method:: supernet(prefixlen_diff=1, new_prefix=None)

method:: subnet_of(other)

method:: supernet_of(other)

method:: next_network(next_prefix=None)

method:: compare_networks(other)

attribute:: is_site_local
