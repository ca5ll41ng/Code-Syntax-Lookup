---
id: "python-en-function-resource-rlimit_sbsize"
language: "python"
lang: "en"
category: "function"
name: "RLIMIT_SBSIZE"
directive: "data"
module: "resource"
source_url: "https://docs.python.org/3/library/resource.html#resource.RLIMIT_SBSIZE"
license: "PSF"
updated: "2026-10-01"
---

# RLIMIT_SBSIZE

The maximum size (in bytes) of socket buffer usage for this user.
This limits the amount of network memory, and hence the amount of mbufs,
that this user may hold at any time.

availability:: FreeBSD, NetBSD.

> *Added in 3.4*
