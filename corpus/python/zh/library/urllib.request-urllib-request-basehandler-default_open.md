---
id: "python-zh-function-urllib-request-basehandler-default_open"
language: "python"
lang: "zh"
category: "function"
name: "BaseHandler.default_open"
signature: "BaseHandler.default_open(req)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/zh-cn/3/library/urllib.request.html#urllib.request.BaseHandler.default_open"
license: "PSF"
updated: "2026-10-01"
---

# BaseHandler.default_open

This method is *not* defined in `BaseHandler`, but subclasses should
define it if they want to catch all URLs.

This method, if implemented, will be called by the parent
`OpenerDirector`.  It should return a file-like object as described in
the return value of the `~OpenerDirector.open` method of `OpenerDirector`, or `None`.
It should raise `~urllib.error.URLError`, unless a truly exceptional
thing happens (for example, `MemoryError` should not be mapped to
`~urllib.error.URLError`).

本方法将会在所有协议的 open 方法之前被调用。
