---
id: "python-zh-function-wsgiref-make_server"
language: "python"
lang: "zh"
category: "function"
name: "make_server"
signature: "make_server(host, port, app, server_class=WSGIServer, handler_class=WSGIRequestHandler)"
directive: "function"
module: "wsgiref"
source_url: "https://docs.python.org/zh-cn/3/library/wsgiref.html#wsgiref.make_server"
license: "PSF"
updated: "2026-10-01"
---

# make_server

Create a new WSGI server listening on *host* and *port*, accepting connections
for *app*.  The return value is an instance of the supplied *server_class*, and
will process requests using the specified *handler_class*.  *app* must be a WSGI
application object, as defined by PEP 3333.

用法示例::

   from wsgiref.simple_server import make_server, demo_app

   with make_server('', 8000, demo_app) as httpd:
       print("Serving HTTP on port 8000...")

       # Respond to requests until process is killed
       httpd.serve_forever()

       # Alternative: serve one request, then exit
       httpd.handle_request()
