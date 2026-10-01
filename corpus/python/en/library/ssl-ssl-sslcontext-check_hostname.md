---
id: "python-en-function-ssl-sslcontext-check_hostname"
language: "python"
lang: "en"
category: "function"
name: "SSLContext.check_hostname"
directive: "attribute"
module: "ssl"
source_url: "https://docs.python.org/3/library/ssl.html#ssl.SSLContext.check_hostname"
license: "PSF"
updated: "2026-10-01"
---

# SSLContext.check_hostname

Whether to match the peer cert's hostname in
`SSLSocket.do_handshake`. The context's
`~SSLContext.verify_mode` must be set to `CERT_OPTIONAL` or
`CERT_REQUIRED`, and you must pass *server_hostname* to
`~SSLContext.wrap_socket` in order to match the hostname.  Enabling
hostname checking automatically sets `~SSLContext.verify_mode` from
`CERT_NONE` to `CERT_REQUIRED`.  It cannot be set back to
`CERT_NONE` as long as hostname checking is enabled. The
`PROTOCOL_TLS_CLIENT` protocol enables hostname checking by default.
With other protocols, hostname checking must be enabled explicitly.

Example::

   import socket, ssl

   context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
   context.verify_mode = ssl.CERT_REQUIRED
   context.check_hostname = True
   context.load_default_certs()

   s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
   ssl_sock = context.wrap_socket(s, server_hostname='www.verisign.com')
   ssl_sock.connect(('www.verisign.com', 443))

> *Added in 3.4*

> *Changed in 3.7*: :attr:`~SSLContext.verify_mode` is now automatically changed to :data:`CERT_REQUIRED`  when hostname checking is enabled and :attr:`~SSLContext.verify_mode` is :data:`CERT_NONE`. Previously the same operation would have failed with a :exc:`ValueError`.
