---
id: "python-en-function-urllib-request-httperrorprocessor-http_response"
language: "python"
lang: "en"
category: "function"
name: "HTTPErrorProcessor.http_response"
signature: "HTTPErrorProcessor.http_response(request, response)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.HTTPErrorProcessor.http_response"
license: "PSF"
updated: "2026-10-01"
---

# HTTPErrorProcessor.http_response

Process HTTP error responses.

For 200 error codes, the response object is returned immediately.

For non-200 error codes, this simply passes the job on to the
`http_error_\` handler methods, via `OpenerDirector.error`.
Eventually, `HTTPDefaultErrorHandler` will raise an
`~urllib.error.HTTPError` if no other handler handles the error.
