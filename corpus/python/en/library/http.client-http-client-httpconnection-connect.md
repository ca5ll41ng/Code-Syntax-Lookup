---
id: "python-en-function-http-client-httpconnection-connect"
language: "python"
lang: "en"
category: "function"
name: "HTTPConnection.connect"
signature: "HTTPConnection.connect()"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPConnection.connect"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.connect

Connect to the server specified when the object was created.  By default,
this is called automatically when making a request if the client does not
already have a connection.

audit-event:: http.client.connect self,host,port http.client.HTTPConnection.connect
