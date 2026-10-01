---
id: "python-en-function-ssl-sslcontext-options"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.options"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.options"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.options

An integer representing the set of SSL options enabled on this context.
The default value is `OP_ALL`, but you can specify other options
such as `OP_NO_SSLv2` by ORing them together.

> *Changed in 3.6*: :attr:`SSLContext.options` returns :class:`Options` flags:     >>> ssl.create_default_context().options  # doctest: +SKIP    <Options.OP_ALL|OP_NO_SSLv3|OP_NO_SSLv2|OP_NO_COMPRESSION: 2197947391>

> *Deprecated since 3.7*: All ``OP_NO_SSL*`` and ``OP_NO_TLS*`` options have been deprecated since Python 3.7. Use :attr:`SSLContext.minimum_version` and :attr:`SSLContext.maximum_version` instead.
