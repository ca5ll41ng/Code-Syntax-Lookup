---
id: "python-en-function-urllib-request-proxyhandler-protocol-_open-request"
language: "python"
lang: "en"
category: "function"
name: "ProxyHandler.<protocol>_open(request)"
directive: "method"
module: "urllib.request"
source_url: "https://docs.python.org/3/library/urllib.request.html#urllib.request.ProxyHandler.<protocol>_open(request)"
license: "PSF"
updated: "2026-10-01"
---

# ProxyHandler.<protocol>_open(request)

The `ProxyHandler` will have a method `<protocol>_open` for every
*protocol* which has a proxy in the *proxies* dictionary given in the
constructor.  The method will modify requests to go through the proxy, by
calling `request.set_proxy()`, and call the next handler in the chain to
actually execute the protocol.
