---
id: "python-en-function-wsgiref-wsgiserver"
language: "python"
lang: "en"
category: "function"
name: "WSGIServer"
signature: "WSGIServer(server_address, RequestHandlerClass)"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.WSGIServer"
license: "PSF"
updated: "2026-10-01"
---

# WSGIServer

Create a `WSGIServer` instance.  *server_address* should be a
`(host,port)` tuple, and *RequestHandlerClass* should be the subclass of
`http.server.BaseHTTPRequestHandler` that will be used to process
requests.

You do not normally need to call this constructor, as the `make_server`
function can handle all the details for you.

`WSGIServer` is a subclass of `http.server.HTTPServer`, so all
of its methods (such as `serve_forever` and `handle_request`) are
available. `WSGIServer` also provides these WSGI-specific methods:

method:: WSGIServer.set_app(application)

method:: WSGIServer.get_app()

Normally, however, you do not need to use these additional methods, as
`set_app` is normally called by `make_server`, and the
`get_app` exists mainly for the benefit of request handler instances.
