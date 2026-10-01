---
id: "python-en-function-http-server-httpserver"
language: "python"
lang: "en"
category: "function"
name: "HTTPServer"
signature: "HTTPServer(server_address, RequestHandlerClass)"
directive: "class"
module: "http.server"
source_url: "https://docs.python.org/3/library/http.server.html#http.server.HTTPServer"
license: "PSF"
updated: "2026-10-01"
---

# HTTPServer

This class builds on the `~socketserver.TCPServer` class by storing
the server address as instance variables named `server_name` and
`server_port`. The server is accessible by the handler, typically
through the handler's `~socketserver.BaseRequestHandler.server`
instance variable.

attribute:: server_name

attribute:: server_port
