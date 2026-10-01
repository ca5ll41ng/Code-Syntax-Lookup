---
id: "python-en-function-xmlrpc-client-dumps"
language: "python"
lang: "en"
category: "function"
name: "dumps"
signature: "dumps(params, methodname=None, methodresponse=None, encoding=None, allow_none=False)"
directive: "function"
module: "xmlrpc.client"
source_url: "https://docs.python.org/3/library/xmlrpc.client.html#xmlrpc.client.dumps"
license: "PSF"
updated: "2026-10-01"
---

# dumps

Convert *params* into an XML-RPC request, or into a response if *methodresponse*
is true. *params* can be either a tuple of arguments or an instance of the
`Fault` exception class.  If *methodresponse* is true, only a single value
can be returned, meaning that *params* must be of length 1. *encoding*, if
supplied, is the encoding to use in the generated XML; the default is UTF-8.
Python's `None` value cannot be used in standard XML-RPC; to allow using
it via an extension,  provide a true value for *allow_none*.
