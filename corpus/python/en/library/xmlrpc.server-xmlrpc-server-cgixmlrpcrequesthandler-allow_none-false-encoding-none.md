---
id: "python-en-function-xmlrpc-server-cgixmlrpcrequesthandler-allow_none-false-encoding-none"
language: "python"
lang: "en"
category: "function"
name: "CGIXMLRPCRequestHandler(allow_none=False, encoding=None,\\"
directive: "class"
module: "xmlrpc.server"
source_url: "https://docs.python.org/3/library/xmlrpc.server.html#xmlrpc.server.CGIXMLRPCRequestHandler(allow_none=False, encoding=None,\\"
license: "PSF"
updated: "2026-10-01"
---

# CGIXMLRPCRequestHandler(allow_none=False, encoding=None,\

Create a new instance to handle XML-RPC requests in a CGI environment.  The
*allow_none* and *encoding* parameters are passed on to `xmlrpc.client`
and control the XML-RPC responses that will be returned from the server.
The *use_builtin_types* parameter is passed to the
`~xmlrpc.client.loads` function and controls which types are processed
when date/times values or binary data are received; it defaults to false.

> *Changed in 3.3*: The *use_builtin_types* flag was added.
