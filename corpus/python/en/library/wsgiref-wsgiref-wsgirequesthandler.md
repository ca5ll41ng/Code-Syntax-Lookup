---
id: "python-en-function-wsgiref-wsgirequesthandler"
language: "python"
lang: "en"
category: "function"
name: "WSGIRequestHandler"
signature: "WSGIRequestHandler(request, client_address, server)"
directive: "class"
module: "wsgiref"
source_url: "https://docs.python.org/3/library/wsgiref.html#wsgiref.WSGIRequestHandler"
license: "PSF"
updated: "2026-10-01"
---

# WSGIRequestHandler

Create an HTTP handler for the given *request* (i.e. a socket), *client_address*
(a `(host,port)` tuple), and *server* (`WSGIServer` instance).

You do not need to create instances of this class directly; they are
automatically created as needed by `WSGIServer` objects.  You can,
however, subclass this class and supply it as a *handler_class* to the
`make_server` function.  Some possibly relevant methods for overriding in
subclasses:

method:: WSGIRequestHandler.get_environ()

method:: WSGIRequestHandler.get_stderr()

method:: WSGIRequestHandler.handle()
