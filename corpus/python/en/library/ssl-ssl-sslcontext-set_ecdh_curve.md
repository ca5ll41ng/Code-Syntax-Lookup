---
id: "python-en-function-ssl-sslcontext-set_ecdh_curve"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.set_ecdh_curve"
signature: "SSLContext.set_ecdh_curve(curve_name, /)"
directive: "method"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.set_ecdh_curve"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.set_ecdh_curve

Set the curve name for Elliptic Curve-based Diffie-Hellman (ECDH) key
exchange.  ECDH is significantly faster than regular DH while arguably
as secure.  The *curve_name* parameter should be a string describing
a well-known elliptic curve, for example `prime256v1` for a widely
supported curve.

This setting doesn't apply to client sockets.  You can also use the
`OP_SINGLE_ECDH_USE` option to further improve security.

This method is not available if `HAS_ECDH` is `False`.

> *Added in 3.3*

> **Seealso**
>
> [SSL/TLS & Perfect Forward Secrecy](https://vincent.bernat.ch/en/blog/2011-ssl-perfect-forward-secrecy)
>    Vincent Bernat.
>
