---
id: "python-en-function-http-server-threadinghttpserver"
language: "python"
lang: "en"
category: "function"
name: "ThreadingHTTPServer"
signature: "ThreadingHTTPServer(server_address, RequestHandlerClass)"
directive: "class"
module: "http.server"
source_url: "https://docs.python.org/3/library/http.server.html#http.server.ThreadingHTTPServer"
license: "PSF"
updated: "2026-10-01"
---

# ThreadingHTTPServer

This class is identical to HTTPServer but uses threads to handle
requests by using the `~socketserver.ThreadingMixIn`. This
is useful to handle web browsers pre-opening sockets, on which
`HTTPServer` would wait indefinitely.

> *Added in 3.7*
