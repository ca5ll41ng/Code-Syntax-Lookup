---
id: "python-en-function-xmlrpc-server-bind_and_activate-true-use_builtin_types-false"
language: "python"
lang: "en"
category: "function"
name: "bind_and_activate=True, use_builtin_types=False)"
directive: "class"
module: "xmlrpc.server"
source_url: "https://docs.python.org/3/library/xmlrpc.server.html#xmlrpc.server.bind_and_activate=True, use_builtin_types=False)"
license: "PSF"
updated: "2026-10-01"
---

# bind_and_activate=True, use_builtin_types=False)

Create a new server instance.  This class provides methods for registration of
functions that can be called by the XML-RPC protocol.  The *requestHandler*
parameter should be a factory for request handler instances; it defaults to
`SimpleXMLRPCRequestHandler`.  The *addr* and *requestHandler* parameters
are passed to the `socketserver.TCPServer` constructor.  If *logRequests*
is true (the default), requests will be logged; setting this parameter to false
will turn off logging.   The *allow_none* and *encoding* parameters are passed
on to `xmlrpc.client` and control the XML-RPC responses that will be returned
from the server. The *bind_and_activate* parameter controls whether
`server_bind` and `server_activate` are called immediately by the
constructor; it defaults to true. Setting it to false allows code to manipulate
the *allow_reuse_address* class variable before the address is bound.
The *use_builtin_types* parameter is passed to the
`~xmlrpc.client.loads` function and controls which types are processed
when date/times values or binary data are received; it defaults to false.

> *Changed in 3.3*: The *use_builtin_types* flag was added.
