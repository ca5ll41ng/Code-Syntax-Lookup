---
id: "python-en-function-urllib-request-basehandler-unknown_open"
language: "python"
lang: "en"
category: "function"
name: "BaseHandler.unknown_open"
signature: "BaseHandler.unknown_open(req)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.BaseHandler.unknown_open"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.unknown_open

This method is *not* defined in `BaseHandler`, but subclasses should
define it if they want to catch all URLs with no specific registered handler to
open it.

This method, if implemented, will be called by the `parent`
`OpenerDirector`.  Return values should be the same as for
`default_open`.
