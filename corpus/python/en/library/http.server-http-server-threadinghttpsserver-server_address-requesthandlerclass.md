---
id: "python-en-function-http-server-threadinghttpsserver-server_address-requesthandlerclass"
language: "python"
lang: "en"
category: "function"
name: "ThreadingHTTPSServer(server_address, RequestHandlerClass,\\"
directive: "class"
module: "http.server"
source_url: "https://docs.python.org/3/library/http.server.html#http.server.ThreadingHTTPSServer(server_address, RequestHandlerClass,\\"
license: "PSF"
updated: "2026-10-01"
---

# ThreadingHTTPSServer(server_address, RequestHandlerClass,\

This class is identical to `HTTPSServer` but uses threads to handle
requests by inheriting from `~socketserver.ThreadingMixIn`. This is
analogous to `ThreadingHTTPServer` only using `HTTPSServer`.

> *Added in 3.14*
