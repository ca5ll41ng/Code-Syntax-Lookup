---
id: "python-en-function-ssl-rand_add"
language: "python"
lang: "en"
category: "function"
name: "RAND_add"
signature: "RAND_add(bytes, entropy, /)"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.RAND_add"
license: "PSF"
updated: "2026-10-01"
---

# RAND_add

Mix the given *bytes* into the SSL pseudo-random number generator.  The
parameter *entropy* (a float) is a lower bound on the entropy contained in
string (so you can always use `0.0`).  See RFC 1750 for more
information on sources of entropy.

> *Changed in 3.5*: Writable :term:`bytes-like object` is now accepted.
