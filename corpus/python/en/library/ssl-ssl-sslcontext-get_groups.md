---
id: "python-en-function-ssl-sslcontext-get_groups"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.get_groups"
signature: "SSLContext.get_groups(*, include_aliases=False)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.get_groups"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.get_groups

Get a list of groups implemented for key agreement, taking into
account the current TLS `~SSLContext.minimum_version` and
`~SSLContext.maximum_version` values.  For example::

    >>> ctx = ssl.create_default_context()
    >>> ctx.minimum_version = ssl.TLSVersion.TLSv1_3
    >>> ctx.maximum_version = ssl.TLSVersion.TLSv1_3
    >>> ctx.get_groups()  # doctest: +SKIP
    ['secp256r1', 'secp384r1', 'secp521r1', 'x25519', 'x448', ...]

By default, this method returns only the preferred IANA names for the
available groups. However, if the `include_aliases` parameter is set to
`True` this method will also return any associated aliases such as
the ECDH curve names supported in older versions of OpenSSL.

> *Added in 3.15*
