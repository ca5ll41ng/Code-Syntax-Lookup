---
id: "python-en-function-xmlrpc-client-datetime"
language: "python"
lang: "en"
category: "function"
name: "DateTime"
directive: "class"
module: "xmlrpc.client"
source_url: "https://docs.python.org/3/library/xmlrpc.client.html#xmlrpc.client.DateTime"
license: "PSF"
updated: "2026-10-01"
---

# DateTime

This class may be initialized with seconds since the epoch, a time
tuple, an ISO 8601 time/date string, or a `datetime.datetime`
instance.  It has the following methods, supported mainly for internal
use by the marshalling/unmarshalling code:

method:: decode(string)

method:: encode(out)

It also supports certain of Python's built-in operators through
`rich comparison` and `~object.__repr__`
methods.
