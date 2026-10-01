---
id: "python-en-function-urllib-request-basehandler-protocol-_response-req-response"
language: "python"
lang: "en"
category: "function"
name: "BaseHandler.<protocol>_response(req, response)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler.<protocol>_response(req, response)"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.<protocol>_response(req, response)

This method is *not* defined in `BaseHandler`, but subclasses should
define it if they want to post-process responses of the given protocol.

This method, if defined, will be called by the parent `OpenerDirector`.
*req* will be a `Request` object. *response* will be an object
implementing the same interface as the return value of `urlopen`.  The
return value should implement the same interface as the return value of
`urlopen`.
