---
id: "python-en-function-http-client-remotedisconnected"
language: "python"
lang: "en"
category: "function"
name: "RemoteDisconnected"
directive: "exception"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.RemoteDisconnected"
license: "PSF"
updated: "2026-10-01"
---

# RemoteDisconnected

A subclass of `ConnectionResetError` and `BadStatusLine`.  Raised
by `HTTPConnection.getresponse` when the attempt to read the response
results in no data read from the connection, indicating that the remote end
has closed the connection.

> *Added in 3.5*: Previously, :exc:`BadStatusLine`\ ``('')`` was raised.
