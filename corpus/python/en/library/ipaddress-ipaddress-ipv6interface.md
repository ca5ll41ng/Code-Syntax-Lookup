---
id: "python-en-function-ipaddress-ipv6interface"
language: "python"
lang: "en"
category: "function"
name: "IPv6Interface"
signature: "IPv6Interface(address)"
directive: "class"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.IPv6Interface"
license: "PSF"
updated: "2026-10-01"
---

# IPv6Interface

Construct an IPv6 interface.  The meaning of *address* is as in the
constructor of `IPv6Network`, except that arbitrary host addresses
are always accepted.

`IPv6Interface` is a subclass of `IPv6Address`, so it inherits
all the attributes from that class.  In addition, the following attributes
are available:

attribute:: ip

attribute:: network

attribute:: with_prefixlen

attribute:: with_netmask

attribute:: with_hostmask
