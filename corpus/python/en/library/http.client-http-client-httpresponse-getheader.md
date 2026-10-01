---
id: "python-en-function-http-client-httpresponse-getheader"
language: "python"
lang: "en"
category: "function"
name: "HTTPResponse.getheader"
signature: "HTTPResponse.getheader(name, default=None)"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/3/library/http.client.html#http.client.HTTPResponse.getheader"
license: "PSF"
updated: "2026-10-01"
---

# HTTPResponse.getheader

Return the value of the header *name*, or *default* if there is no header
matching *name*.  If there is more than one  header with the name *name*,
return all of the values joined by ', '.  If *default* is any iterable other
than a single string, its elements are similarly returned joined by commas.
