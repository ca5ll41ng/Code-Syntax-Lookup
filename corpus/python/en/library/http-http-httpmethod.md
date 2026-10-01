---
id: "python-en-function-http-httpmethod"
language: "python"
lang: "en"
category: "function"
name: "HTTPMethod"
directive: "class"
module: "http"
source_url: "https://docs.python.org/3/library/http.html#http.HTTPMethod"
license: "PSF"
updated: "2026-10-01"
---

# HTTPMethod

> *Added in 3.11*

A subclass of `enum.StrEnum` that defines a set of HTTP methods and descriptions written in English.

Usage::

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
