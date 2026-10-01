---
id: "python-en-function-urllib-request-basehandler-protocol-_open-req"
language: "python"
lang: "en"
category: "function"
name: "BaseHandler.<protocol>_open(req)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler.<protocol>_open(req)"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.<protocol>_open(req)

This method is *not* defined in `BaseHandler`, but subclasses should
define it if they want to handle URLs with the given protocol.

This method, if defined, will be called by the parent `OpenerDirector`.
Return values should be the same as for  `~BaseHandler.default_open`.
