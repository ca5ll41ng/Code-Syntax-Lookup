---
id: "python-en-function-random-getrandbits"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B311"],"cwe":["CWE-330"],"note":"Standard pseudo-random generators are not suitable for security/cryptographic purposes."}
name: "getrandbits"
signature: "getrandbits(k)"
directive: "function"
module: "random"
source_url: "https://docs.python.org/3/library/random.html#random.getrandbits"
license: "PSF"
updated: "2026-10-01"
---

# getrandbits

Returns a non-negative Python integer with *k* random bits. This method
is supplied with the Mersenne Twister generator and some other generators
may also provide it as an optional part of the API. When available,
`getrandbits` enables `randrange` to handle arbitrarily large
ranges.

> *Changed in 3.9*: This method now accepts zero for *k*.
