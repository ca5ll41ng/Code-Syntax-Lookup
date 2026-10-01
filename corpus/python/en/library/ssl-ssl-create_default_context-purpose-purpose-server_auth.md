---
id: "python-en-function-ssl-create_default_context-purpose-purpose-server_auth"
language: "python"
lang: "en"
category: "function"
name: "create_default_context(purpose=Purpose.SERVER_AUTH, *,\\"
directive: "function"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.create_default_context(purpose=Purpose.SERVER_AUTH, *,\\"
license: "PSF"
updated: "2026-10-01"
---

# create_default_context(purpose=Purpose.SERVER_AUTH, *,\

Return a new `SSLContext` object with default settings for
the given *purpose*.  The settings are chosen by the `ssl` module,
and usually represent a higher security level than when calling the
`SSLContext` constructor directly.

*cafile*, *capath*, *cadata* represent optional CA certificates to
trust for certificate verification, as in
`SSLContext.load_verify_locations`.  If all three are
`None`, this function can choose to trust the system's default
CA certificates instead.

The settings are: `PROTOCOL_TLS_CLIENT` or
`PROTOCOL_TLS_SERVER`, `OP_NO_SSLv2`, and `OP_NO_SSLv3`
with high encryption cipher suites without RC4 and
without unauthenticated cipher suites. Passing `~Purpose.SERVER_AUTH`
as *purpose* sets `~SSLContext.verify_mode` to `CERT_REQUIRED`
and either loads CA certificates (when at least one of *cafile*, *capath* or
*cadata* is given) or uses `SSLContext.load_default_certs` to load
default CA certificates.

When the environment variable `SSLKEYLOGFILE` is set,
`create_default_context` enables key logging by setting
`~SSLContext.keylog_filename` to the variable's value.

The default settings for this context include
`VERIFY_X509_PARTIAL_CHAIN` and `VERIFY_X509_STRICT`.
These make the underlying OpenSSL implementation behave more like
a conforming implementation of RFC 5280, in exchange for a small
amount of incompatibility with older X.509 certificates.

> **Note**
>
> The protocol, options, cipher and other settings may change to more
> restrictive values anytime without prior deprecation.  The values
> represent a fair balance between compatibility and security.
>
> If your application needs specific settings, you should create a
> `SSLContext` and apply the settings yourself.
>

> **Note**
>
> If you find that when certain older clients or servers attempt to connect
> with a `SSLContext` created by this function that they get an error
> stating "Protocol or cipher suite mismatch", it may be that they only
> support SSL3.0 which this function excludes using the
> `OP_NO_SSLv3`. SSL3.0 is widely considered to be `completely broken
> <https://en.wikipedia.org/wiki/POODLE>`_. If you still wish to continue to
> use this function but still allow SSL 3.0 connections you can re-enable
> them using::
>
>    ctx = ssl.create_default_context(Purpose.CLIENT_AUTH)
>    ctx.options &= ~ssl.OP_NO_SSLv3
>

> **Note**
>
> This context enables `VERIFY_X509_STRICT` by default, which
> may reject pre-RFC 5280 or malformed certificates that the
> underlying OpenSSL implementation otherwise would accept. While disabling
> this is not recommended, you can do so using::
>
>    ctx = ssl.create_default_context()
>    ctx.verify_flags &= ~ssl.VERIFY_X509_STRICT
>

> *Added in 3.4*

> *Changed in 3.4.4*: RC4 was dropped from the default cipher string.

> *Changed in 3.6*: ChaCha20/Poly1305 was added to the default cipher string.  3DES was dropped from the default cipher string.

> *Changed in 3.8*: Support for key logging to :envvar:`SSLKEYLOGFILE` was added.

> *Changed in 3.10*: The context now uses :data:`PROTOCOL_TLS_CLIENT` or :data:`PROTOCOL_TLS_SERVER` protocol instead of generic :data:`PROTOCOL_TLS`.

> *Changed in 3.13*: The context now uses :data:`VERIFY_X509_PARTIAL_CHAIN` and :data:`VERIFY_X509_STRICT` in its default verify flags.
