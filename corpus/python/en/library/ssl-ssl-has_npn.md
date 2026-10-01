---
id: "python-en-function-ssl-has_npn"
language: "python"
lang: "en"
category: "function"
name: "HAS_NPN"
directive: "data"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.HAS_NPN"
license: "PSF"
updated: "2026-10-01"
---

# HAS_NPN

Whether the OpenSSL library has built-in support for the *Next Protocol
Negotiation* as described in the `Application Layer Protocol
Negotiation <https://en.wikipedia.org/wiki/Application-Layer_Protocol_Negotiation>`_.
When true, you can use the `SSLContext.set_npn_protocols` method to advertise
which protocols you want to support.

> *Added in 3.3*
