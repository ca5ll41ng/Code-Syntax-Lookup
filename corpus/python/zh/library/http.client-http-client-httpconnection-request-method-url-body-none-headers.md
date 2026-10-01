---
id: "python-zh-function-http-client-httpconnection-request-method-url-body-none-headers"
language: "python"
lang: "zh"
category: "function"
name: "HTTPConnection.request(method, url, body=None, headers={}, *, \\"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/zh-cn/3/library/http.client.html#http.client.HTTPConnection.request(method, url, body=None, headers={}, *, \\"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.request(method, url, body=None, headers={}, *, \

This will send a request to the server using the HTTP request
method *method* and the request URI *url*. The provided *url* must be
an absolute path to conform with RFC RFC 2616 §5.1.2 <2616#section-5.1.2>
(unless connecting to an HTTP proxy server or using the `OPTIONS` or
`CONNECT` methods).

If *body* is specified, the specified data is sent after the headers are
finished.  It may be a `str`, a `bytes-like object`, an
open `file object`, or an iterable of `bytes`.  If *body*
is a string, it is encoded as ISO-8859-1, the default for HTTP.  If it
is a bytes-like object, the bytes are sent as is.  If it is a `file
object`, the contents of the file is sent; this file object should
support at least the `read()` method.  If the file object is an
instance of `io.TextIOBase`, the data returned by the `read()`
method will be encoded as ISO-8859-1, otherwise the data returned by
`read()` is sent as is.  If *body* is an iterable, the elements of the
iterable are sent as is until the iterable is `exhausted`.

The *headers* argument should be a mapping of extra HTTP headers to send
with the request. A RFC Host header <2616#section-14.23>
must be provided to conform with RFC RFC 2616 §5.1.2 <2616#section-5.1.2>
(unless connecting to an HTTP proxy server or using the `OPTIONS` or
`CONNECT` methods).

If *headers* contains neither Content-Length nor Transfer-Encoding,
but there is a request body, one of those
header fields will be added automatically.  If
*body* is `None`, the Content-Length header is set to `0` for
methods that expect a body (`PUT`, `POST`, and `PATCH`).  If
*body* is a string or a bytes-like object that is not also a
`file`, the Content-Length header is
set to its length.  Any other type of *body* (files
and iterables in general) will be chunk-encoded, and the
Transfer-Encoding header will automatically be set instead of
Content-Length.

The *encode_chunked* argument is only relevant if Transfer-Encoding is
specified in *headers*.  If *encode_chunked* is `False`, the
HTTPConnection object assumes that all encoding is handled by the
calling code.  If it is `True`, the body will be chunk-encoded.

例如，要对 ``https://docs.python.org/3/`` 执行一个 ``GET`` 请求::

   >>> import http.client
   >>> host = "docs.python.org"
   >>> conn = http.client.HTTPSConnection(host)
   >>> conn.request("GET", "/3/", headers={"Host": host})
   >>> response = conn.getresponse()
   >>> print(response.status, response.reason)
   200 OK

> **Note**
>
> Chunked transfer encoding has been added to the HTTP protocol
> version 1.1.  Unless the HTTP server is known to handle HTTP 1.1,
> the caller must either specify the Content-Length, or must pass a
> `str` or bytes-like object that is not also a file as the
> body representation.
>

> **Note**
>
> Note that you must have read the whole response or call `close`
> if `getresponse` raised an non-`ConnectionError` exception
> before you can send a new request to the server.
>

> *Changed in 3.2*: *body* can now be an iterable.

> *Changed in 3.6*: If neither Content-Length nor Transfer-Encoding are set in *headers*, file and iterable *body* objects are now chunk-encoded. The *encode_chunked* argument was added. No attempt is made to determine the Content-Length for file objects.
