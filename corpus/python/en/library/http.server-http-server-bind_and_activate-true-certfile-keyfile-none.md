---
id: "python-en-function-http-server-bind_and_activate-true-certfile-keyfile-none"
language: "python"
lang: "en"
category: "function"
name: "bind_and_activate=True, *, certfile, keyfile=None,\\"
directive: "class"
module: "http.server"
source_url: "https://docs.python.org/3/library/http.server.html#http.server.bind_and_activate=True, *, certfile, keyfile=None,\\"
license: "PSF"
updated: "2026-10-01"
---

# bind_and_activate=True, *, certfile, keyfile=None,\

Subclass of `HTTPServer` with a wrapped socket using the `ssl` module.
If the `ssl` module is not available, instantiating a `HTTPSServer`
object fails with a `RuntimeError`.

The *certfile* argument is the path to the SSL certificate chain file,
and the *keyfile* is the path to the file containing the private key.

A *password* can be specified for files protected and wrapped with PKCS#8,
but beware that this could possibly expose hardcoded passwords in clear.

> **Seealso**
>
> See `ssl.SSLContext.load_cert_chain` for additional
> information on the accepted values for *certfile*, *keyfile*
> and *password*.
>

When specified, the *alpn_protocols* argument must be a sequence of strings
specifying the "Application-Layer Protocol Negotiation" (ALPN) protocols
supported by the server. ALPN allows the server and the client to negotiate
the application protocol during the TLS handshake.

By default, it is set to `["http/1.1"]`, meaning the server supports HTTP/1.1.

> *Added in 3.14*
