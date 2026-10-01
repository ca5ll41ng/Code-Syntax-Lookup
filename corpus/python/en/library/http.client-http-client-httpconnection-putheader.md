---
id: "python-en-function-http-client-httpconnection-putheader"
language: "python"
lang: "en"
category: "function"
name: "HTTPConnection.putheader"
signature: "HTTPConnection.putheader(header, argument[, ...])"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPConnection.putheader"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.putheader

Send an RFC 822\ -style header to the server.  It sends a line to the server
consisting of the header, a colon and a space, and the first argument.  If more
arguments are given, continuation lines are sent, each consisting of a tab and
an argument.
