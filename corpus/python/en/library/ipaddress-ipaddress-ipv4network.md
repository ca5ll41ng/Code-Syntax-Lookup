---
id: "python-en-function-ipaddress-ipv4network"
language: "python"
lang: "en"
category: "function"
name: "IPv4Network"
signature: "IPv4Network(address, strict=True)"
directive: "class"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.IPv4Network"
license: "PSF"
updated: "2026-10-01"
---

# IPv4Network

Construct an IPv4 network definition.  *address* can be one of the following:

1. A string consisting of an IP address and an optional mask, separated by
   a slash (`/`).  The IP address is the network address, and the mask
   can be either a single number, which means it's a *prefix*, or a string
   representation of an IPv4 address.  If it's the latter, the mask is
   interpreted as a *net mask* if it starts with a non-zero field, or as a
   *host mask* if it starts with a zero field, with the single exception of
   an all-zero mask which is treated as a *net mask*.  If no mask is provided,
   it's considered to be `/32`.

   For example, the following *address* specifications are equivalent:
   `192.168.1.0/24`, `192.168.1.0/255.255.255.0` and
   `192.168.1.0/0.0.0.255`.

2. An integer that fits into 32 bits.  This is equivalent to a
   single-address network, with the network address being *address* and
   the mask being `/32`.

3. An integer packed into a `bytes` object of length 4, big-endian.
   The interpretation is similar to an integer *address*.

4. A two-tuple of an address description and a netmask, where the address
   description is either a string, a 32-bit integer, a 4-byte packed
   integer, or an existing `IPv4Address` object; and the netmask is
   either an integer representing the prefix length (e.g. `24`) or a
   string representing the prefix mask (e.g. `255.255.255.0`).

An `AddressValueError` is raised if *address* is not a valid IPv4
address.  A `NetmaskValueError` is raised if the mask is not valid for
an IPv4 address.

If *strict* is `True` and host bits are set in the supplied address,
then `ValueError` is raised.  Otherwise, the host bits are masked out
to determine the appropriate network address.

Unless stated otherwise, all network methods accepting other network/address
objects will raise `TypeError` if the argument's IP version is
incompatible to `self`.

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

method:: compare_networks(other)

method:: next_network(next_prefix=None)
