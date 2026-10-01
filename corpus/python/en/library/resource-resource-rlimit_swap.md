---
id: "python-en-function-resource-rlimit_swap"
language: "python"
lang: "en"
category: "function"
name: "RLIMIT_SWAP"
directive: "data"
module: "resource"
source_url: "https://docs.python.org/3/library/resource.html#resource.RLIMIT_SWAP"
license: "PSF"
updated: "2026-10-01"
---

# RLIMIT_SWAP

The maximum size (in bytes) of the swap space that may be reserved or
used by all of this user id's processes.
This limit is enforced only if bit 1 of the vm.overcommit sysctl is set.
Please see
[tuning(7)](https://man.freebsd.org/cgi/man.cgi?query=tuning&sektion=7)
for a complete description of this sysctl.

availability:: FreeBSD >= 8.

> *Added in 3.4*
