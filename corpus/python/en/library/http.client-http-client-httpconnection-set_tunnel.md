---
id: "python-en-function-http-client-httpconnection-set_tunnel"
language: "python"
lang: "en"
category: "function"
name: "HTTPConnection.set_tunnel"
signature: "HTTPConnection.set_tunnel(host, port=None, headers=None)"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPConnection.set_tunnel"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.set_tunnel

Set the host and the port for HTTP Connect Tunnelling. This allows running
the connection through a proxy server.

The *host* and *port* arguments specify the endpoint of the tunneled connection
(i.e. the address included in the CONNECT request, *not* the address of the
proxy server).

The *headers* argument should be a mapping of extra HTTP headers to send with
the CONNECT request.

As HTTP/1.1 is used for HTTP CONNECT tunnelling request, `as per the RFC
<https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.6>`_, a HTTP `Host:`
header must be provided, matching the authority-form of the request target
provided as the destination for the CONNECT request. If a HTTP `Host:`
header is not provided via the headers argument, one is generated and
transmitted automatically.

For example, to tunnel through a HTTPS proxy server running locally on port
8080, we would pass the address of the proxy to the `HTTPSConnection`
constructor, and the address of the host that we eventually want to reach to
the `~HTTPConnection.set_tunnel` method::

   >>> import http.client
   >>> conn = http.client.HTTPSConnection("localhost", 8080)
   >>> conn.set_tunnel("www.python.org")
   >>> conn.request("HEAD","/index.html")

> *Added in 3.2*

> *Changed in 3.12*: HTTP CONNECT tunnelling requests use protocol HTTP/1.1, upgraded from protocol HTTP/1.0. ``Host:`` HTTP headers are mandatory for HTTP/1.1, so one will be automatically generated and transmitted if not provided in the headers argument.
