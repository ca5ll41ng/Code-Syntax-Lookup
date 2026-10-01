---
id: "python-en-function-urllib-request-urlopen"
language: "python"
lang: "en"
category: "function"
danger: {"type":"sink","attack":["B310"],"cwe":["CWE-22"],"note":"Audit url open for permitted schemes. Allowing use of file:/ or custom schemes is often unexpected."}
name: "urlopen"
signature: "urlopen(url, data=None[, timeout], *, context=None)"
directive: "function"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.urlopen"
license: "PSF"
updated: "2026-10-01"
---

# urlopen

Open *url*, which can be either a string containing a valid, properly
encoded URL, or a `Request` object.

*data* must be an object specifying additional data to be sent to the
server, or `None` if no such data is needed.  See `Request`
for details.

urllib.request module uses HTTP/1.1 and includes `Connection:close` header
in its HTTP requests.

The optional *timeout* parameter specifies a timeout in seconds for
blocking operations like the connection attempt (if not specified,
the global default timeout setting will be used).  This actually
only works for HTTP, HTTPS and FTP connections.

If *context* is specified, it must be a `ssl.SSLContext` instance
describing the various SSL options. See `~http.client.HTTPSConnection`
for more details.

This function always returns an object which can work as a
`context manager` and has the properties *url*, *headers*, and *status*.
See `urllib.response.addinfourl` for more detail on these properties.

For HTTP and HTTPS URLs, this function returns a
`http.client.HTTPResponse` object slightly modified. In addition
to the three new methods above, the msg attribute contains the
same information as the `~http.client.HTTPResponse.reason`
attribute --- the reason phrase returned by server --- instead of
the response headers as it is specified in the documentation for
`~http.client.HTTPResponse`.

For FTP, file, and data URLs, this function
returns a `urllib.response.addinfourl` object.

Raises `~urllib.error.URLError` on protocol errors.

Note that `None` may be returned if no handler handles the request (though
the default installed global `OpenerDirector` uses
`UnknownHandler` to ensure this never happens).

In addition, if proxy settings are detected (for example, when a `*_proxy`
environment variable like `http_proxy` is set),
`ProxyHandler` is default installed and makes sure the requests are
handled through the proxy.

The legacy `urllib.urlopen` function from Python 2.6 and earlier has been
discontinued; `urllib.request.urlopen` corresponds to the old
`urllib2.urlopen`.  Proxy handling, which was done by passing a dictionary
parameter to `urllib.urlopen`, can be obtained by using
`ProxyHandler` objects.

audit-event:: urllib.Request fullurl,data,headers,method urllib.request.urlopen

> *Changed in 3.2*: *cafile* and *capath* were added.  HTTPS virtual hosts are now supported if possible (that is, if :const:`ssl.HAS_SNI` is true).  *data* can be an iterable object.

> *Changed in 3.3*: *cadefault* was added.

> *Changed in 3.4.3*: *context* was added.

> *Changed in 3.10*: HTTPS connection now send an ALPN extension with protocol indicator ``http/1.1`` when no *context* is given. Custom *context* should set ALPN protocols with :meth:`~ssl.SSLContext.set_alpn_protocols`.

> *Changed in 3.13*: Remove *cafile*, *capath* and *cadefault* parameters: use the *context* parameter instead.
