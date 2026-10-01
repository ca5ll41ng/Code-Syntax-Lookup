---
id: "python-en-function-xmlrpc-client-binary"
language: "python"
lang: "en"
category: "function"
name: "Binary"
directive: "class"
module: "xmlrpc.client"
source_url: "https://docs.python.org/3/library/xmlrpc.client.html#xmlrpc.client.Binary"
license: "PSF"
updated: "2026-10-01"
---

# Binary

This class may be initialized from bytes data (which may include NULs). The
primary access to the content of a `Binary` object is provided by an
attribute:

attribute:: data

`Binary` objects have the following methods, supported mainly for
internal use by the marshalling/unmarshalling code:

method:: decode(bytes)

method:: encode(out)

It also supports certain of Python's built-in operators through
`~object.__eq__` and `~object.__ne__` methods.
