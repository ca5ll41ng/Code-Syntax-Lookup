---
id: "python-zh-function-urllib-request-basehandler-http_error_-nnn-req-fp-code-msg-hdrs"
language: "python"
lang: "zh"
category: "function"
name: "BaseHandler.http_error_<nnn>(req, fp, code, msg, hdrs)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.request.html#urllib.request.BaseHandler.http_error_<nnn>(req, fp, code, msg, hdrs)"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.http_error_<nnn>(req, fp, code, msg, hdrs)

*nnn* should be a three-digit HTTP error code.  This method is also not defined
in `BaseHandler`, but will be called, if it exists, on an instance of a
subclass, when an HTTP error with code *nnn* occurs.

子类应该重写本方法，以便能处理相应的 HTTP 错误。

Arguments, return values and exceptions raised should be the same as for
`~BaseHandler.http_error_default`.
