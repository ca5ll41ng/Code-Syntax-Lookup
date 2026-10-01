---
id: "python-zh-function-http-server-basehttprequesthandler"
language: "python"
lang: "zh"
category: "function"
name: "BaseHTTPRequestHandler"
signature: "BaseHTTPRequestHandler(request, client_address, server)"
directive: "class"
module: "http.server"
source_url: "https://docs.python.org/zh-cn/3/library/http.server.html#http.server.BaseHTTPRequestHandler"
license: "PSF"
updated: "2026-10-01"
---

# BaseHTTPRequestHandler

This class is used to handle the HTTP requests that arrive at the server.  By
itself, it cannot respond to any actual HTTP requests; it must be subclassed
to handle each request method (for example, `'GET'` or `'POST'`).
`BaseHTTPRequestHandler` provides a number of class and instance
variables, and methods for use by subclasses.

The handler will parse the request and the headers, then call a method
specific to the request type. The method name is constructed from the
request. For example, for the request method `SPAM`, the `do_SPAM`
method will be called with no arguments. All of the relevant information is
stored in instance variables of the handler.  Subclasses should not need to
override or extend the `__init__` method.

:class:`BaseHTTPRequestHandler` 具有下列实例变量：

attribute:: client_address

attribute:: server

attribute:: close_connection

attribute:: requestline

attribute:: command

attribute:: path

attribute:: request_version

attribute:: headers

attribute:: rfile

attribute:: wfile

:class:`BaseHTTPRequestHandler` 具有下列属性：

attribute:: server_version

attribute:: sys_version

attribute:: error_message_format

attribute:: error_content_type

attribute:: protocol_version

attribute:: MessageClass

attribute:: responses

:class:`BaseHTTPRequestHandler` 实例具有下列方法：

method:: handle()

method:: handle_one_request()

method:: handle_expect_100()

method:: send_error(code, message=None, explain=None)

method:: send_response(code, message=None)

method:: send_header(keyword, value)

method:: send_response_only(code, message=None)

method:: end_headers()

method:: flush_headers()

method:: log_request(code='-', size='-')

method:: log_error(...)

method:: log_message(format, ...)

method:: version_string()

method:: date_time_string(timestamp=None)

method:: log_date_time_string()

method:: address_string()
