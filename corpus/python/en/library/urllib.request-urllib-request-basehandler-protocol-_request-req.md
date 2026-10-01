---
id: "python-en-function-urllib-request-basehandler-protocol-_request-req"
language: "python"
lang: "en"
category: "function"
name: "BaseHandler.<protocol>_request(req)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler.<protocol>_request(req)"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.<protocol>_request(req)

This method is *not* defined in `BaseHandler`, but subclasses should
define it if they want to pre-process requests of the given protocol.

This method, if defined, will be called by the parent `OpenerDirector`.
*req* will be a `Request` object. The return value should be a
`Request` object.
