---
id: "python-zh-function-http-httpmethod"
language: "python"
lang: "zh"
category: "function"
name: "HTTPMethod"
directive: "class"
module: "http"
source_url: "https://docs.python.org/zh-cn/3/library/http.html#http.HTTPMethod"
license: "PSF"
updated: "2026-10-01"
---

# HTTPMethod

> *Added in 3.11*

一个 :class:`enum.StrEnum` 的子类，它定义了一组 HTTP 方法以及用英文书写的描述。

用法::

   >>> from http import HTTPMethod
   >>>
   >>> HTTPMethod.GET
   <HTTPMethod.GET>
   >>> HTTPMethod.GET == 'GET'
   True
   >>> HTTPMethod.GET.value
   'GET'
   >>> HTTPMethod.GET.description
   'Retrieve the target.'
   >>> list(HTTPMethod)
   [<HTTPMethod.CONNECT>,
    <HTTPMethod.DELETE>,
    <HTTPMethod.GET>,
    <HTTPMethod.HEAD>,
    <HTTPMethod.OPTIONS>,
    <HTTPMethod.PATCH>,
    <HTTPMethod.POST>,
    <HTTPMethod.PUT>,
    <HTTPMethod.TRACE>]
