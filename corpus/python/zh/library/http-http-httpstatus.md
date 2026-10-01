---
id: "python-zh-function-http-httpstatus"
language: "python"
lang: "zh"
category: "function"
name: "HTTPStatus"
directive: "class"
module: "http"
source_url: "https://docs.python.org/zh-cn/3/library/http.html#http.HTTPStatus"
license: "PSF"
updated: "2026-10-01"
---

# HTTPStatus

> *Added in 3.5*

A subclass of `enum.IntEnum` that defines a set of HTTP status codes,
reason phrases and long descriptions written in English.

用法::

   >>> from http import HTTPStatus
   >>> HTTPStatus.OK
   HTTPStatus.OK
   >>> HTTPStatus.OK == 200
   True
   >>> HTTPStatus.OK.value
   200
   >>> HTTPStatus.OK.phrase
   'OK'
   >>> HTTPStatus.OK.description
   'Request fulfilled, document follows'
   >>> list(HTTPStatus)
   [HTTPStatus.CONTINUE, HTTPStatus.SWITCHING_PROTOCOLS, ...]
