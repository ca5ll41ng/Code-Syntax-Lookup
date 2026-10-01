---
id: "python-en-function-uuid-getnode"
language: "python"
lang: "en"
category: "function"
name: "getnode"
signature: "getnode()"
directive: "function"
module: "uuid"
source_url: "https://docs.python.org/3/library/uuid.html#uuid.getnode"
license: "PSF"
updated: "2026-10-01"
---

# getnode

Get the hardware address as a 48-bit positive integer.  The first time this
runs, it may launch a separate program, which could be quite slow.  If all
attempts to obtain the hardware address fail, we choose a random 48-bit
number with the multicast bit (least significant bit of the first octet)
set to 1 as recommended in RFC 4122.  "Hardware address" means the MAC
address of a network interface.  On a machine with multiple network
interfaces, universally administered MAC addresses (i.e. where the second
least significant bit of the first octet is *unset*) will be preferred over
locally administered MAC addresses, but with no other ordering guarantees.

> *Changed in 3.7*: Universally administered MAC addresses are preferred over locally administered MAC addresses, since the former are guaranteed to be globally unique, while the latter are not.
