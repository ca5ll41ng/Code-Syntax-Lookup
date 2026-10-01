---
id: "python-en-function-urllib-request-basehandler-http_error_-nnn-req-fp-code-msg-hdrs"
language: "python"
lang: "en"
category: "function"
name: "BaseHandler.http_error_<nnn>(req, fp, code, msg, hdrs)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler.http_error_<nnn>(req, fp, code, msg, hdrs)"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.http_error_<nnn>(req, fp, code, msg, hdrs)

*nnn* should be a three-digit HTTP error code.  This method is also not defined
in `BaseHandler`, but will be called, if it exists, on an instance of a
subclass, when an HTTP error with code *nnn* occurs.

Subclasses should override this method to handle specific HTTP errors.

Arguments, return values and exceptions raised should be the same as for
`~BaseHandler.http_error_default`.
