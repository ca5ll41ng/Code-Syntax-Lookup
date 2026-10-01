---
id: "python-en-function-ssl-sslcontext-load_dh_params"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.load_dh_params"
signature: "SSLContext.load_dh_params(dhfile, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.load_dh_params"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.load_dh_params

Load the key generation parameters for Diffie-Hellman (DH) key exchange.
Using DH key exchange improves forward secrecy at the expense of
computational resources (both on the server and on the client).
The *dhfile* parameter should be the path to a file containing DH
parameters in PEM format.

This setting doesn't apply to client sockets.  You can also use the
`OP_SINGLE_DH_USE` option to further improve security.

> *Added in 3.3*
