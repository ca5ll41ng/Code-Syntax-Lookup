---
id: "python-en-function-xmlrpc-server-simplexmlrpcrequesthandler-rpc_paths"
language: "python"
lang: "en"
category: "function"
name: "SimpleXMLRPCRequestHandler.rpc_paths"
directive: "attribute"
module: "xmlrpc.server"
source_url: "https://docs.python.org/3/library/xmlrpc.server.html#xmlrpc.server.SimpleXMLRPCRequestHandler.rpc_paths"
license: "PSF"
updated: "2026-10-01"
---

# SimpleXMLRPCRequestHandler.rpc_paths

An attribute value that must be a tuple listing valid path portions of the URL
for receiving XML-RPC requests.  Requests posted to other paths will result in a
404 "no such page" HTTP error.  If this tuple is empty, all paths will be
considered valid. The default value is `('/', '/RPC2')`.
