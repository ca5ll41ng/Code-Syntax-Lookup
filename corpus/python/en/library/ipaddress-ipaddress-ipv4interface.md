---
id: "python-en-function-ipaddress-ipv4interface"
language: "python"
lang: "en"
category: "function"
name: "IPv4Interface"
signature: "IPv4Interface(address)"
directive: "class"
module: "ipaddress"
source_url: "https://docs.python.org/3/library/ipaddress.html#ipaddress.IPv4Interface"
license: "PSF"
updated: "2026-10-01"
---

# IPv4Interface

Construct an IPv4 interface.  The meaning of *address* is as in the
constructor of `IPv4Network`, except that arbitrary host addresses
are always accepted.

`IPv4Interface` is a subclass of `IPv4Address`, so it inherits
all the attributes from that class.  In addition, the following attributes
are available:

attribute:: ip

attribute:: network

attribute:: with_prefixlen

attribute:: with_netmask

attribute:: with_hostmask
