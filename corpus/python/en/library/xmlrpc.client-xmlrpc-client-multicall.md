---
id: "python-en-function-xmlrpc-client-multicall"
language: "python"
lang: "en"
category: "function"
name: "MultiCall"
signature: "MultiCall(server)"
directive: "class"
module: "xmlrpc.client"
source_url: "https://docs.python.org/3/library/xmlrpc.client.html#xmlrpc.client.MultiCall"
license: "PSF"
updated: "2026-10-01"
---

# MultiCall

Create an object used to boxcar method calls. *server* is the eventual target of
the call. Calls can be made to the result object, but they will immediately
return `None`, and only store the call name and arguments in the
`MultiCall` object. Calling the object itself causes all stored calls to
be transmitted as a single `system.multicall` request. The result of this call
is a `generator`; iterating over this generator yields the individual
results.
