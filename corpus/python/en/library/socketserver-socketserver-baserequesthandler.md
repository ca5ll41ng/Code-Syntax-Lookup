---
id: "python-en-function-socketserver-baserequesthandler"
language: "python"
lang: "en"
category: "function"
name: "BaseRequestHandler"
directive: "class"
module: "socketserver"
source_url: "https://docs.python.org/3/library/socketserver.html#socketserver.BaseRequestHandler"
license: "PSF"
updated: "2026-10-01"
---

# BaseRequestHandler

This is the superclass of all request handler objects.  It defines
the interface, given below.  A concrete request handler subclass must
define a new `handle` method, and can override any of
the other methods.  A new instance of the subclass is created for each
request.

method:: setup()

method:: handle()

method:: finish()

attribute:: request

attribute:: client_address

attribute:: server
