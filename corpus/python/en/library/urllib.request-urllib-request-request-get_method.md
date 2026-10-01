---
id: "python-en-function-urllib-request-request-get_method"
language: "python"
lang: "en"
category: "function"
name: "Request.get_method"
signature: "Request.get_method()"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.Request.get_method"
license: "PSF"
updated: "2026-10-01"
---

# Request.get_method

Return a string indicating the HTTP request method.  If
`Request.method` is not `None`, return its value, otherwise return
`'GET'` if `Request.data` is `None`, or `'POST'` if it's not.
This is only meaningful for HTTP requests.

> *Changed in 3.3*: get_method now looks at the value of :attr:`Request.method`.
