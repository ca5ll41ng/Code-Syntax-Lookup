---
id: "python-en-function-http-http"
language: "python"
lang: "en"
category: "function"
name: "http"
title: "HTTP methods"
directive: "module"
module: "http"
source_url: "https://docs.python.org/3/library/http.html#module-http"
license: "PSF"
updated: "2026-10-01"
---

# HTTP methods

.. _http-methods:

**HTTP methods**

Supported,
[IANA-registered methods](https://www.iana.org/assignments/http-methods/http-methods.xhtml)
available in `http.HTTPMethod` are:

=========== =================================== ==================================================================
Method      Enum Name                           Details
=========== =================================== ==================================================================
`GET`     `GET`                             HTTP Semantics RFC 9110, Section 9.3.1
`HEAD`    `HEAD`                            HTTP Semantics RFC 9110, Section 9.3.2
`POST`    `POST`                            HTTP Semantics RFC 9110, Section 9.3.3
`PUT`     `PUT`                             HTTP Semantics RFC 9110, Section 9.3.4
`DELETE`  `DELETE`                          HTTP Semantics RFC 9110, Section 9.3.5
`CONNECT` `CONNECT`                         HTTP Semantics RFC 9110, Section 9.3.6
`OPTIONS` `OPTIONS`                         HTTP Semantics RFC 9110, Section 9.3.7
`TRACE`   `TRACE`                           HTTP Semantics RFC 9110, Section 9.3.8
`PATCH`   `PATCH`                           HTTP/1.1 RFC 5789
=========== =================================== ==================================================================
