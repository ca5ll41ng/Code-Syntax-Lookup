---
id: "python-en-function-http-client-httpconnection-getresponse"
language: "python"
lang: "en"
category: "function"
name: "HTTPConnection.getresponse"
signature: "HTTPConnection.getresponse()"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPConnection.getresponse"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.getresponse

Should be called after a request is sent to get the response from the server.
Returns an `HTTPResponse` instance.

> *Changed in 3.5*: If a :exc:`ConnectionError` or subclass is raised, the :class:`HTTPConnection` object will be ready to reconnect when a new request is sent.  Note that this does not apply to :exc:`OSError`\s raised by the underlying socket. Instead the caller is responsible to call :meth:`close` on the existing connection.
