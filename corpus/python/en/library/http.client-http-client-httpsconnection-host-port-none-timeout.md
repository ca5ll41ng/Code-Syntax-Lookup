---
id: "python-en-function-http-client-httpsconnection-host-port-none-timeout"
language: "python"
lang: "en"
category: "function"
name: "HTTPSConnection(host, port=None, *[, timeout], \\"
directive: "class"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPSConnection(host, port=None, *[, timeout], \\"
license: "PSF"
updated: "2026-10-01"
---

# HTTPSConnection(host, port=None, *[, timeout], \

A subclass of `HTTPConnection` that uses SSL for communication with
secure servers.  Default port is `443`.  If *context* is specified, it
must be a `ssl.SSLContext` instance describing the various SSL
options.

Please read `ssl-security` for more information on best practices.

> *Changed in 3.2*: *source_address*, *context* and *check_hostname* were added.

> *Changed in 3.2*: This class now supports HTTPS virtual hosts if possible (that is, if :const:`ssl.HAS_SNI` is true).

> *Changed in 3.4*: The *strict* parameter was removed. HTTP 0.9-style "Simple Responses" are no longer supported.

> *Changed in 3.4.3*: This class now performs all the necessary certificate and hostname checks by default. To revert to the previous, unverified, behavior :func:`!ssl._create_unverified_context` can be passed to the *context* parameter.

> *Changed in 3.8*: This class now enables TLS 1.3 :attr:`ssl.SSLContext.post_handshake_auth` for the default *context* or when *cert_file* is passed with a custom *context*.

> *Changed in 3.10*: This class now sends an ALPN extension with protocol indicator ``http/1.1`` when no *context* is given. Custom *context* should set ALPN protocols with :meth:`~ssl.SSLContext.set_alpn_protocols`.

> *Changed in 3.12*: The deprecated *key_file*, *cert_file* and *check_hostname* parameters have been removed.

> *Changed in 3.15*: *max_response_headers* parameter was added.
