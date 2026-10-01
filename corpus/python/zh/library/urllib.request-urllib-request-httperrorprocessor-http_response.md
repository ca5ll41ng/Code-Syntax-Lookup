---
id: "python-zh-function-urllib-request-httperrorprocessor-http_response"
language: "python"
lang: "zh"
category: "function"
name: "HTTPErrorProcessor.http_response"
signature: "HTTPErrorProcessor.http_response(request, response)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.request.html#urllib.request.HTTPErrorProcessor.http_response"
license: "PSF"
updated: "2026-10-01"
---

# HTTPErrorProcessor.http_response

处理出错的 HTTP 响应。

对于 200 错误码，响应对象会立即返回。

For non-200 error codes, this simply passes the job on to the
`http_error_\` handler methods, via `OpenerDirector.error`.
Eventually, `HTTPDefaultErrorHandler` will raise an
`~urllib.error.HTTPError` if no other handler handles the error.
