---
id: "python-en-function-xmlrpc-client-loads"
language: "python"
lang: "en"
category: "function"
name: "loads"
signature: "loads(data, use_datetime=False, use_builtin_types=False)"
directive: "function"
module: "xmlrpc.client"
source_url: "https://docs.python.org/3/library/xmlrpc.client.html#xmlrpc.client.loads"
license: "PSF"
updated: "2026-10-01"
---

# loads

Convert an XML-RPC request or response into Python objects, a `(params,
methodname)`.  *params* is a tuple of argument; *methodname* is a string, or
`None` if no method name is present in the packet. If the XML-RPC packet
represents a fault condition, this function will raise a `Fault` exception.
The *use_builtin_types* flag can be used to cause date/time values to be
presented as `datetime.datetime` objects and binary data to be
presented as `bytes` objects; this flag is false by default.

The obsolete *use_datetime* flag is similar to *use_builtin_types* but it
applies only to date/time values.

> *Changed in 3.3*: The *use_builtin_types* flag was added.
