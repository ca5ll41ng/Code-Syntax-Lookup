---
id: "python-en-function-ssl-get_sigalgs"
language: "python"
lang: "en"
category: "function"
name: "get_sigalgs"
signature: "get_sigalgs()"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.get_sigalgs"
license: "PSF"
updated: "2026-10-01"
---

# get_sigalgs

Return a list of available TLS signature algorithm names used
by servers to complete the TLS handshake or clients requesting
certificate-based authentication. For example::

    >>> ssl.get_sigalgs()  # doctest: +SKIP
    ['ecdsa_secp256r1_sha256', 'ecdsa_secp384r1_sha384', ...]

These names can be used when building string values to pass to the
`SSLContext.set_client_sigalgs` and
`SSLContext.set_server_sigalgs` methods.

> *Added in 3.15*
