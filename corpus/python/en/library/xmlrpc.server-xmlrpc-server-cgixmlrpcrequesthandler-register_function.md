---
id: "python-en-function-xmlrpc-server-cgixmlrpcrequesthandler-register_function"
language: "python"
lang: "en"
category: "function"
name: "CGIXMLRPCRequestHandler.register_function"
signature: "CGIXMLRPCRequestHandler.register_function(function=None, name=None)"
directive: "method"
module: "xmlrpc.server"
source_url: "https://docs.python.org/3/library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler.register_function"
license: "PSF"
updated: "2026-10-01"
---

# CGIXMLRPCRequestHandler.register_function

Register a function that can respond to XML-RPC requests.  If *name* is given,
it will be the method name associated with *function*, otherwise
`function.__name__` will be used.  *name* is a string, and may contain
characters not legal in Python identifiers, including the period character.

This method can also be used as a decorator.  When used as a decorator,
*name* can only be given as a keyword argument to register *function* under
*name*.  If no *name* is given, `function.__name__` will be used.

> *Changed in 3.7*: :meth:`register_function` can be used as a decorator.
