---
id: "python-zh-function-http-client-httpconnection-get_proxy_response_headers"
language: "python"
lang: "zh"
category: "function"
name: "HTTPConnection.get_proxy_response_headers"
signature: "HTTPConnection.get_proxy_response_headers()"
directive: "method"
module: "http.client"
source_url: "https://docs.python.org/zh-cn/3/library/http.client.html#http.client.HTTPConnection.get_proxy_response_headers"
license: "PSF"
updated: "2026-10-01"
---

# HTTPConnection.get_proxy_response_headers

Returns a dictionary with the headers of the response received from
the proxy server to the CONNECT request.

如果未发送 CONNECT 请求，该方法将返回 ``None``。

> *Added in 3.12*
