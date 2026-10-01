---
id: "python-zh-function-wsgiref-demo_app"
language: "python"
lang: "zh"
category: "function"
name: "demo_app"
signature: "demo_app(environ, start_response)"
directive: "function"
module: "wsgiref"
source_url: "https://docs.python.org/zh-cn/3/library/wsgiref.html#wsgiref.demo_app"
license: "PSF"
updated: "2026-10-01"
---

# demo_app

This function is a small but complete WSGI application that returns a text page
containing the message "Hello world!" and a list of the key/value pairs provided
in the *environ* parameter.  It's useful for verifying that a WSGI server (such
as `wsgiref.simple_server`) is able to run a simple WSGI application
correctly.

*start_response* 可调用对象必须遵循 :class:`.StartResponse` 协议。
