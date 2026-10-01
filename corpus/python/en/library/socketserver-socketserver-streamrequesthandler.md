---
id: "python-en-function-socketserver-streamrequesthandler"
language: "python"
lang: "en"
category: "function"
name: "StreamRequestHandler"
directive: "class"
module: "socketserver"
source_url: "https://docs.python.org/3/library/socketserver.html#socketserver.StreamRequestHandler"
license: "PSF"
updated: "2026-10-01"
---

# StreamRequestHandler

These `BaseRequestHandler` subclasses override the
`~BaseRequestHandler.setup` and `~BaseRequestHandler.finish`
methods, and provide `rfile` and `wfile` attributes.

attribute:: rfile

attribute:: wfile

> *Changed in 3.6*: :attr:`wfile` also supports the :class:`io.BufferedIOBase` writable interface.
