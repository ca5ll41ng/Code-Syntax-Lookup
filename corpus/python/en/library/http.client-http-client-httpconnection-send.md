---
id: "python-en-function-http-client-httpconnection-send"
language: "python"
lang: "en"
category: "function"
name: "HTTPConnection.send"
signature: "HTTPConnection.send(data)"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPConnection.send"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.send

Send data to the server.  This should be used directly only after the
`endheaders` method has been called and before `getresponse` is
called.

audit-event:: http.client.send self,data http.client.HTTPConnection.send
