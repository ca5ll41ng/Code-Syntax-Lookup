---
id: "python-zh-function-urllib-request-basehandler-http_error_default"
language: "python"
lang: "zh"
category: "function"
name: "BaseHandler.http_error_default"
signature: "BaseHandler.http_error_default(req, fp, code, msg, hdrs)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.request.html#urllib.request.BaseHandler.http_error_default"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.http_error_default

This method is *not* defined in `BaseHandler`, but subclasses should
override it if they intend to provide a catch-all for otherwise unhandled HTTP
errors.  It will be called automatically by the  `OpenerDirector` getting
the error, and should not normally be called in other circumstances.

:class:`OpenerDirector` 将附带五个位置参数调用此方法：

1. a `Request` object,
#. a file-like object with the HTTP error body,
#. the three-digit code of the error, as a string,
#. the user-visible explanation of the code, as a string, and
#. the headers of the error, as a mapping object.

Return values and exceptions raised should be the same as those of
`urlopen`.
