---
id: "python-en-function-ssl-sslcontext"
language: "python"
lang: "en"
category: "function"
name: "SSLContext"
signature: "SSLContext(protocol=None)"
directive: "class"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext

Create a new SSL context.  You may pass *protocol* which must be one
of the `PROTOCOL_*` constants defined in this module.  The parameter
specifies which version of the SSL protocol to use.  Typically, the
server chooses a particular protocol version, and the client must adapt
to the server's choice.  Most of the versions are not interoperable
with the other versions.  If not specified, the default is
`PROTOCOL_TLS`; it provides the most compatibility with other
versions.

Here's a table showing which versions in a client (down the side) can connect
to which versions in a server (along the top):

table::

#### Footnotes

.. [1] `SSLContext` disables SSLv2 with `OP_NO_SSLv2` by default.
.. [2] `SSLContext` disables SSLv3 with `OP_NO_SSLv3` by default.
.. [3] TLS 1.3 protocol will be available with `PROTOCOL_TLS` in
   OpenSSL >= 1.1.1. There is no dedicated PROTOCOL constant for just
   TLS 1.3.

> **Seealso**
>
> `create_default_context` lets the `ssl` module choose
> security settings for a given purpose.
>

> *Changed in 3.6*: The context is created with secure default values. The options :data:`OP_NO_COMPRESSION`, :data:`OP_CIPHER_SERVER_PREFERENCE`, :data:`OP_SINGLE_DH_USE`, :data:`OP_SINGLE_ECDH_USE`, :data:`OP_NO_SSLv2`, and :data:`OP_NO_SSLv3` (except for :data:`PROTOCOL_SSLv3`) are set by default. The initial cipher suite list contains only ``HIGH`` ciphers, no ``NULL`` ciphers and no ``MD5`` ciphers.

> *Deprecated since 3.10*: :class:`SSLContext` without protocol argument is deprecated. The context class will either require :data:`PROTOCOL_TLS_CLIENT` or :data:`PROTOCOL_TLS_SERVER` protocol in the future.

> *Changed in 3.10*: The default cipher suites now include only secure AES and ChaCha20 ciphers with forward secrecy and security level 2. RSA and DH keys with less than 2048 bits and ECC keys with less than 224 bits are prohibited. :data:`PROTOCOL_TLS`, :data:`PROTOCOL_TLS_CLIENT`, and :data:`PROTOCOL_TLS_SERVER` use TLS 1.2 as minimum TLS version.

> **Note**
>
> `SSLContext` only supports limited mutation once it has been used
> by a connection. Adding new certificates to the internal trust store is
> allowed, but changing ciphers, verification settings, or mTLS
> certificates may result in surprising behavior.
>

> **Note**
>
> `SSLContext` is designed to be shared and used by multiple
> connections.
> Thus, it is thread-safe as long as it is not reconfigured after being
> used by a connection.
>
