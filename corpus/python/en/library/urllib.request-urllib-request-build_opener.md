---
id: "python-en-function-urllib-request-build_opener"
language: "python"
lang: "en"
category: "function"
name: "build_opener"
signature: "build_opener([handler, ...])"
directive: "function"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.build_opener"
license: "PSF"
updated: "2026-10-01"
---

# build_opener

Return an `OpenerDirector` instance, which chains the handlers in the
order given. *handler*\s can be either instances of `BaseHandler`, or
subclasses of `BaseHandler` (in which case it must be possible to call
the constructor without any parameters).  Instances of the following classes
will be in front of the *handler*\s, unless the *handler*\s contain them,
instances of them or subclasses of them: `ProxyHandler` (if proxy
settings are detected), `UnknownHandler`, `HTTPHandler`,
`HTTPDefaultErrorHandler`, `HTTPRedirectHandler`,
`FTPHandler`, `FileHandler`, `HTTPErrorProcessor`.

If the Python installation has SSL support (i.e., if the `ssl` module
can be imported), `HTTPSHandler` will also be added.

A `BaseHandler` subclass may also change its `handler_order`
attribute to modify its position in the handlers list.
