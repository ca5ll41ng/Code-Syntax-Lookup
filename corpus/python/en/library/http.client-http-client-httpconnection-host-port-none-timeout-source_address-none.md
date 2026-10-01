---
id: "python-en-function-http-client-httpconnection-host-port-none-timeout-source_address-none"
language: "python"
lang: "en"
category: "function"
name: "HTTPConnection(host, port=None[, timeout], source_address=None, \\"
directive: "class"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPConnection(host, port=None[, timeout], source_address=None, \\"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection(host, port=None[, timeout], source_address=None, \

An `HTTPConnection` instance represents one transaction with an HTTP
server.  It should be instantiated by passing it a host and optional port
number.  If no port number is passed, the port is extracted from the host
string if it has the form `host:port`, else the default HTTP port (80) is
used.  If the optional *timeout* parameter is given, blocking
operations (like connection attempts) will timeout after that many seconds
(if it is not given, the global default timeout setting is used).
The optional *source_address* parameter may be a tuple of a (host, port)
to use as the source address the HTTP connection is made from.
The optional *blocksize* parameter sets the buffer size in bytes for
sending a file-like message body. The optional *max_response_headers*
parameter sets the maximum number of allowed response headers to help
prevent denial-of-service attacks, otherwise the default value (100) is used.

For example, the following calls all create instances that connect to the server
at the same host and port::

   >>> h1 = http.client.HTTPConnection('www.python.org')
   >>> h2 = http.client.HTTPConnection('www.python.org:80')
   >>> h3 = http.client.HTTPConnection('www.python.org', 80)
   >>> h4 = http.client.HTTPConnection('www.python.org', 80, timeout=10)

> *Changed in 3.2*: *source_address* was added.

> *Changed in 3.4*: The  *strict* parameter was removed. HTTP 0.9-style "Simple Responses" are no longer supported.

> *Changed in 3.7*: *blocksize* parameter was added.

> *Changed in 3.15*: *max_response_headers* parameter was added.
